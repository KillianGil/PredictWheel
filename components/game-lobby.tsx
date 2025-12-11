"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Users, Play, Crown, Check, Waves } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import type { GameState, GamePlayer } from "@/lib/types"
import { getSessionId } from "@/lib/game-utils"
import { LOCAL_CARDS, LOCAL_THEMES, LocalCard } from "@/lib/local-cards"

interface GameLobbyProps {
  gameState: GameState
  onStartGame: () => void
}

export function GameLobby({ gameState, onStartGame }: GameLobbyProps) {
  const [players, setPlayers] = useState<GamePlayer[]>(gameState.players)
  const [copied, setCopied] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState<string>(gameState.theme?.id || LOCAL_THEMES[0].id)
  const [isSyncing, setIsSyncing] = useState(false)
  const [sessionId, setSessionId] = useState<string>("")
  const supabase = createClient()

  const isHost = players.find((p) => p.session_id === sessionId)?.is_host

  // Refresh players from database
  const refreshPlayers = useCallback(async () => {
    const { data } = await supabase.from("game_players").select("*").eq("game_id", gameState.game.id)
    if (data) setPlayers(data)
  }, [supabase, gameState.game.id])

  // Auto-sync database content (themes and cards) silently on mount
  const syncDatabaseSilently = useCallback(async () => {
    if (isSyncing) return
    setIsSyncing(true)
    try {
      // Sync Themes
      for (const theme of LOCAL_THEMES) {
        // @ts-ignore
        await supabase.from("themes").upsert({
          id: theme.id,
          name: theme.name,
          description: theme.description
        })
      }

      // Sync Cards (only insert new ones)
      for (const card of LOCAL_CARDS) {
        const { data: existing } = await supabase
          .from("cards")
          .select("id")
          .eq("left_extreme", card.leftExtreme)
          .eq("right_extreme", card.rightExtreme)
          .eq("theme_id", card.theme)
          .maybeSingle()

        if (!existing) {
          // @ts-ignore
          await supabase.from("cards").insert({
            theme_id: card.theme,
            left_extreme: card.leftExtreme,
            right_extreme: card.rightExtreme
          })
        }
      }
    } catch (err) {
      console.error("Sync error:", err)
    } finally {
      setIsSyncing(false)
    }
  }, [supabase, isSyncing])

  useEffect(() => {
    // Set session ID on client only
    setSessionId(getSessionId())

    // Auto-sync database on mount (silent, no alerts)
    syncDatabaseSilently()

    // Set initial theme if not set
    if (!selectedTheme) {
      setSelectedTheme(LOCAL_THEMES[0].id)
    }
    // Update game with selected theme
    if (isHost && selectedTheme) {
      supabase.from("games").update({ theme_id: selectedTheme }).eq("id", gameState.game.id)
    }

    // Subscribe to player changes
    const channel = supabase
      .channel(`game-${gameState.game.id}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "game_players",
          filter: `game_id=eq.${gameState.game.id}`,
        },
        () => {
          refreshPlayers()
        },
      )
      .subscribe()

    // Fallback: Poll for player updates every 3 seconds
    const pollInterval = setInterval(refreshPlayers, 3000)

    return () => {
      supabase.removeChannel(channel)
      clearInterval(pollInterval)
    }
  }, [gameState.game.id, supabase, selectedTheme, isHost, syncDatabaseSilently, refreshPlayers])

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(gameState.game.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleThemeChange = async (themeId: string) => {
    setSelectedTheme(themeId)
    // @ts-ignore
    await supabase.from("games").update({ theme_id: themeId }).eq("id", gameState.game.id)
  }

  const canStart = players.length >= 2 && selectedTheme

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <Card className="relative w-full max-w-lg shadow-xl border-slate-200 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-indigo-100 rounded-full">
              <Waves className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-slate-800">Salle d'attente</CardTitle>
          <p className="text-slate-500 mt-1">Partagez le code pour inviter des joueurs</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Code de la partie */}
          <div className="flex items-center justify-center gap-3">
            <div className="px-6 py-4 bg-slate-100 rounded-xl">
              <span className="text-4xl font-mono font-bold tracking-[0.2em] text-slate-800">
                {gameState.game.code}
              </span>
            </div>
            <Button variant="outline" size="icon" className="h-14 w-14 bg-white" onClick={handleCopyCode}>
              {copied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5" />}
            </Button>
          </div>

          {/* Sélection du thème (using LOCAL_THEMES) */}
          {isHost && (
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-700">Choisir un thème</label>
              <div className="flex flex-wrap gap-2">
                {LOCAL_THEMES.map((theme) => (
                  <Badge
                    key={theme.id}
                    variant={selectedTheme === theme.id ? "default" : "outline"}
                    className="cursor-pointer transition-all hover:scale-105 px-4 py-2 text-sm"
                    onClick={() => handleThemeChange(theme.id)}
                  >
                    {theme.name}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Liste des joueurs */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <Users className="h-4 w-4" />
              Joueurs ({players.length})
            </div>
            <div className="space-y-2">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100"
                >
                  <span className="font-medium text-slate-700">{player.player_name}</span>
                  <div className="flex items-center gap-2">
                    {player.is_host && (
                      <Badge variant="secondary" className="gap-1 bg-amber-100 text-amber-700">
                        <Crown className="h-3 w-3" />
                        Hôte
                      </Badge>
                    )}
                    {player.session_id === sessionId && (
                      <Badge variant="outline" className="border-indigo-300 text-indigo-600">
                        Vous
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {players.length < 2 && (
              <p className="text-sm text-slate-500 text-center py-2">En attente d'au moins 2 joueurs...</p>
            )}
          </div>

          {/* Bouton démarrer */}
          {isHost ? (
            <Button
              className="w-full h-12 text-base font-semibold bg-indigo-500 hover:bg-indigo-600 rounded-xl"
              size="lg"
              onClick={onStartGame}
              disabled={!canStart}
            >
              <Play className="h-5 w-5 mr-2" />
              {!canStart ? "En attente de joueurs..." : "Démarrer la partie"}
            </Button>
          ) : (
            <div className="text-center p-4 bg-slate-50 rounded-xl">
              <p className="text-slate-500">En attente que l'hôte démarre la partie...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
