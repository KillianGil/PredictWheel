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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Waves className="h-10 w-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Predict Wheel</h1>
              <p className="text-slate-500 mt-2">Êtes-vous sur la même longueur d'onde ?</p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setMode("local")}
              className="w-full p-5 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl flex items-center gap-4 hover:bg-white/90 hover:border-indigo-200 transition-all text-left shadow-sm"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                <Smartphone className="h-7 w-7 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Mode Local</h3>
                <p className="text-sm text-slate-500">Jouer ensemble sur le même téléphone/ordinateur</p>
              </div>
            </button>

            <button
              onClick={() => setMode("online")}
              className="w-full p-5 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl flex items-center gap-4 hover:bg-white/90 hover:border-violet-200 transition-all text-left shadow-sm"
            >
              <div className="w-14 h-14 bg-violet-100 rounded-xl flex items-center justify-center shrink-0">
                <Wifi className="h-7 w-7 text-violet-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Mode En Ligne</h3>
                <p className="text-sm text-slate-500">Jouez avec un code de partie</p>
              </div>
            </button>
          </div>

          <p className="text-center text-sm text-slate-500">Un jeu de communication entre amis</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 p-4 pb-8">
      <div className="max-w-md mx-auto space-y-6">
        <button
          onClick={() => setMode("select")}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Retour</span>
        </button>

        <div className="text-center py-4">
          <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Wifi className="h-8 w-8 text-violet-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">Mode En Ligne</h1>
          <p className="text-slate-500 mt-1">Créez ou rejoignez une partie</p>
        </div>

        {/* Etape 1 : Pseudo */}
        <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-600">Votre pseudo</label>
            <Input
              placeholder="Entrez votre nom..."
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              maxLength={20}
              className="h-12 rounded-xl bg-white border-slate-200"
            />
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-sm text-red-600 text-center">{error}</p>
          </div>
        )}

        {/* Créer une partie */}
        <Button
          className="w-full h-14 text-lg font-semibold rounded-2xl bg-indigo-500 hover:bg-indigo-600"
          onClick={handleCreateGame}
          disabled={isLoading || !playerName.trim()}
        >
          <Sparkles className="h-5 w-5 mr-2" />
          Créer une partie
        </Button>

        <div className="relative py-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-slate-50 via-white to-indigo-50 px-4 text-sm text-slate-500">ou rejoindre</span>
          </div>
        </div>

        {/* Rejoindre une partie */}
        <div className="flex gap-2">
          <Input
            placeholder="CODE"
            value={gameCode}
            onChange={(e) => setGameCode(e.target.value.toUpperCase())}
            maxLength={6}
            className="h-14 text-center text-xl font-mono tracking-[0.2em] uppercase rounded-xl bg-white border-slate-200 flex-1"
          />
          <Button
            className="h-14 px-6 text-lg font-semibold rounded-2xl bg-violet-500 hover:bg-violet-600"
            onClick={handleJoinGame}
            disabled={isLoading || !playerName.trim() || !gameCode.trim()}
          >
            <Users className="h-5 w-5 mr-2" />
            Rejoindre
          </Button>
        </div>
      </div>
    </div>
  )
}
