"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Users, Play, Crown, Check, Waves } from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import type { GameState, GamePlayer, Theme } from "@/lib/types"
import { getSessionId } from "@/lib/game-utils"

interface GameLobbyProps {
  gameState: GameState
  onStartGame: () => void
}

export function GameLobby({ gameState, onStartGame }: GameLobbyProps) {
  const [players, setPlayers] = useState<GamePlayer[]>(gameState.players)
  const [copied, setCopied] = useState(false)
  const [themes, setThemes] = useState<Theme[]>([])
  const [selectedTheme, setSelectedTheme] = useState<string>(gameState.theme?.id || "")
  const sessionId = getSessionId()
  const supabase = createClient()

  const isHost = players.find((p) => p.session_id === sessionId)?.is_host

  useEffect(() => {
    async function loadThemes() {
      const { data } = await supabase.from("themes").select("*")
      if (data) {
        setThemes(data)
        if (!selectedTheme && data.length > 0) {
          setSelectedTheme(data[0].id)
          supabase.from("games").update({ theme_id: data[0].id }).eq("id", gameState.game.id)
        }
      }
    }
    loadThemes()

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
        async () => {
          const { data } = await supabase.from("game_players").select("*").eq("game_id", gameState.game.id)
          if (data) setPlayers(data)
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [gameState.game.id, supabase, selectedTheme])

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(gameState.game.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleThemeChange = async (themeId: string) => {
    setSelectedTheme(themeId)
    await supabase.from("games").update({ theme_id: themeId }).eq("id", gameState.game.id)
  }

  const canStart = players.length >= 2 && selectedTheme

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <Card className="relative w-full max-w-lg shadow-xl border-border/50">
        <CardHeader className="text-center pb-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Waves className="h-8 w-8 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Salle d'attente</CardTitle>
          <p className="text-muted-foreground mt-1">Partagez le code pour inviter des joueurs</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Code de la partie */}
          <div className="flex items-center justify-center gap-3">
            <div className="px-6 py-4 bg-muted rounded-xl">
              <span className="text-4xl font-mono font-bold tracking-[0.2em] text-foreground">
                {gameState.game.code}
              </span>
            </div>
            <Button variant="outline" size="icon" className="h-14 w-14 bg-transparent" onClick={handleCopyCode}>
              {copied ? <Check className="h-5 w-5 text-green-600" /> : <Copy className="h-5 w-5" />}
            </Button>
          </div>

          {/* Sélection du thème */}
          {isHost && (
            <div className="space-y-3">
              <label className="text-sm font-semibold text-foreground">Choisir un thème</label>
              <div className="flex flex-wrap gap-2">
                {themes.map((theme) => (
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
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Users className="h-4 w-4" />
              Joueurs ({players.length})
            </div>
            <div className="space-y-2">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border/50"
                >
                  <span className="font-medium text-foreground">{player.player_name}</span>
                  <div className="flex items-center gap-2">
                    {player.is_host && (
                      <Badge variant="secondary" className="gap-1">
                        <Crown className="h-3 w-3" />
                        Hôte
                      </Badge>
                    )}
                    {player.session_id === sessionId && (
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        Vous
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {players.length < 2 && (
              <p className="text-sm text-muted-foreground text-center py-2">En attente d'au moins 2 joueurs...</p>
            )}
          </div>

          {/* Bouton démarrer */}
          {isHost ? (
            <Button
              className="w-full h-12 text-base font-semibold"
              size="lg"
              onClick={onStartGame}
              disabled={!canStart}
            >
              <Play className="h-5 w-5 mr-2" />
              {!canStart ? "En attente de joueurs..." : "Démarrer la partie"}
            </Button>
          ) : (
            <div className="text-center p-4 bg-muted/30 rounded-xl">
              <p className="text-muted-foreground">En attente que l'hôte démarre la partie...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
