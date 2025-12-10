"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClient } from "@/lib/supabase/client"
import { generateGameCode, getSessionId } from "@/lib/game-utils"
import { useRouter } from "next/navigation"
import { Users, Sparkles, Waves, Smartphone, Wifi, ArrowLeft } from "lucide-react"
import { LocalGame } from "@/components/local-game"

export default function HomePage() {
  const [playerName, setPlayerName] = useState("")
  const [gameCode, setGameCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [mode, setMode] = useState<"select" | "online" | "local">("select")
  const router = useRouter()
  const supabase = createClient()

  const handleCreateGame = async () => {
    if (!playerName.trim()) {
      setError("Entrez votre nom pour continuer")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const code = generateGameCode()
      const sessionId = getSessionId()

      const { data: game, error: gameError } = await supabase
        .from("games")
        .insert({ code, status: "waiting" })
        .select()
        .single()

      if (gameError) throw gameError

      const { error: playerError } = await supabase.from("game_players").insert({
        game_id: game.id,
        player_name: playerName,
        session_id: sessionId,
        is_host: true,
      })

      if (playerError) throw playerError

      router.push(`/game/${code}`)
    } catch (err) {
      console.error(err)
      setError("Erreur lors de la création de la partie")
    } finally {
      setIsLoading(false)
    }
  }

  const handleJoinGame = async () => {
    if (!playerName.trim()) {
      setError("Entrez votre nom pour continuer")
      return
    }
    if (!gameCode.trim()) {
      setError("Entrez le code de la partie")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const sessionId = getSessionId()

      const { data: game, error: gameError } = await supabase
        .from("games")
        .select("*")
        .eq("code", gameCode.toUpperCase())
        .single()

      if (gameError || !game) {
        setError("Partie introuvable")
        return
      }

      if (game.status !== "waiting") {
        setError("Cette partie a déjà commencé")
        return
      }

      const { data: existingPlayer } = await supabase
        .from("game_players")
        .select("*")
        .eq("game_id", game.id)
        .eq("session_id", sessionId)
        .single()

      if (!existingPlayer) {
        const { error: playerError } = await supabase.from("game_players").insert({
          game_id: game.id,
          player_name: playerName,
          session_id: sessionId,
          is_host: false,
        })

        if (playerError) throw playerError
      }

      router.push(`/game/${gameCode.toUpperCase()}`)
    } catch (err) {
      console.error(err)
      setError("Erreur lors de la connexion à la partie")
    } finally {
      setIsLoading(false)
    }
  }

  if (mode === "local") {
    return <LocalGame onBack={() => setMode("select")} />
  }

  if (mode === "select") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Waves className="h-10 w-10 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">Wavelength</h1>
              <p className="text-muted-foreground mt-2">Êtes-vous sur la même longueur d'onde ?</p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setMode("local")}
              className="w-full p-5 bg-card rounded-2xl flex items-center gap-4 hover:bg-muted/50 transition-colors text-left"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                <Smartphone className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Mode Local</h3>
                <p className="text-sm text-muted-foreground">Passez-vous le téléphone</p>
              </div>
            </button>

            <button
              onClick={() => setMode("online")}
              className="w-full p-5 bg-card rounded-2xl flex items-center gap-4 hover:bg-muted/50 transition-colors text-left"
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0">
                <Wifi className="h-7 w-7 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Mode En Ligne</h3>
                <p className="text-sm text-muted-foreground">Jouez avec un code de partie</p>
              </div>
            </button>
          </div>

          <p className="text-center text-sm text-muted-foreground">Un jeu de communication entre amis</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 p-4 pb-8">
      <div className="max-w-md mx-auto space-y-6">
        <button
          onClick={() => setMode("select")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Retour</span>
        </button>

        <div className="text-center py-4">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wifi className="h-8 w-8 text-blue-500" />
          </div>
          <h1 className="text-3xl font-bold">Mode En Ligne</h1>
          <p className="text-muted-foreground mt-1">Créez ou rejoignez une partie</p>
        </div>

        <div className="bg-card rounded-2xl p-5 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Votre pseudo</label>
            <Input
              placeholder="Entrez votre nom..."
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              maxLength={20}
              className="h-12 rounded-xl"
            />
          </div>

          {error && (
            <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-xl">
              <p className="text-sm text-destructive text-center">{error}</p>
            </div>
          )}

          <Button
            className="w-full h-14 text-lg font-semibold rounded-2xl"
            onClick={handleCreateGame}
            disabled={isLoading}
          >
            <Sparkles className="h-5 w-5 mr-2" />
            Créer une partie
          </Button>
        </div>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-sm text-muted-foreground">ou rejoindre</span>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-5 space-y-4">
          <Input
            placeholder="CODE"
            value={gameCode}
            onChange={(e) => setGameCode(e.target.value.toUpperCase())}
            maxLength={6}
            className="h-14 text-center text-2xl font-mono tracking-[0.3em] uppercase rounded-xl"
          />
          <Button
            className="w-full h-14 text-lg font-semibold rounded-2xl"
            variant="secondary"
            onClick={handleJoinGame}
            disabled={isLoading}
          >
            <Users className="h-5 w-5 mr-2" />
            Rejoindre
          </Button>
        </div>
      </div>
    </div>
  )
}
