"use client"

import { useState, useEffect } from "react"
import { GameLobby } from "@/components/game-lobby"
import { GamePlay } from "@/components/game-play"
import { createClient } from "@/lib/supabase/client"
import { getSessionId, generateTargetPosition } from "@/lib/game-utils"
import type { GameState } from "@/lib/types"
import { useRouter } from "next/navigation"

interface GameClientProps {
  initialGameState: GameState
}

export function GameClient({ initialGameState }: GameClientProps) {
  const [gameState, setGameState] = useState<GameState>(initialGameState)
  const supabase = createClient()
  const router = useRouter()
  const sessionId = getSessionId()

  useEffect(() => {
    // Vérifier que le joueur est dans la partie
    const isInGame = gameState.players.some((p) => p.session_id === sessionId)
    if (!isInGame && typeof window !== "undefined") {
      router.push("/")
      return
    }

    // S'abonner aux changements de la partie
    const channel = supabase
      .channel(`game-state-${gameState.game.id}`)
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "games",
          filter: `id=eq.${gameState.game.id}`,
        },
        async (payload) => {
          const updatedGame = payload.new as typeof gameState.game

          let currentCard = gameState.currentCard
          let theme = gameState.theme

          if (updatedGame.current_card_id && updatedGame.current_card_id !== gameState.currentCard?.id) {
            const { data } = await supabase.from("cards").select("*").eq("id", updatedGame.current_card_id).single()
            if (data) currentCard = data
          }

          if (updatedGame.theme_id && updatedGame.theme_id !== gameState.theme?.id) {
            const { data } = await supabase.from("themes").select("*").eq("id", updatedGame.theme_id).single()
            if (data) theme = data
          }

          setGameState((prev) => ({
            ...prev,
            game: updatedGame,
            currentCard,
            theme,
          }))
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [gameState.game.id, supabase, sessionId, router])

  const handleStartGame = async () => {
    // Sélectionner une carte aléatoire du thème
    const { data: cards } = await supabase.from("cards").select("*").eq("theme_id", gameState.theme?.id)

    if (!cards || cards.length === 0) return

    const randomCard = cards[Math.floor(Math.random() * cards.length)]
    const targetPosition = generateTargetPosition()

    // Sélectionner un médium au hasard
    const players = gameState.players
    const randomPsychic = players[Math.floor(Math.random() * players.length)]

    // Mettre à jour les joueurs
    for (const player of players) {
      await supabase
        .from("game_players")
        .update({
          is_psychic: player.id === randomPsychic.id,
          guess_position: null,
        })
        .eq("id", player.id)
    }

    // Démarrer la partie
    await supabase
      .from("games")
      .update({
        status: "playing",
        current_round: 1,
        current_card_id: randomCard.id,
        target_position: targetPosition,
        current_clue: null,
      })
      .eq("id", gameState.game.id)
  }

  if (gameState.game.status === "waiting") {
    return <GameLobby gameState={gameState} onStartGame={handleStartGame} />
  }

  return <GamePlay initialGameState={gameState} />
}
