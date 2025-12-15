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

    // Fonction de rafraîchissement
    const fetchLatestState = async () => {
      const { data: latestGame } = await supabase
        .from("games")
        .select("*")
        .eq("id", gameState.game.id)
        .single()

      if (latestGame) {
        let currentCard = gameState.currentCard
        let theme = gameState.theme

        if (latestGame.current_card_id && latestGame.current_card_id !== gameState.currentCard?.id) {
          const { data } = await supabase.from("cards").select("*").eq("id", latestGame.current_card_id).single()
          if (data) currentCard = data
        }

        if (latestGame.theme_id && latestGame.theme_id !== gameState.theme?.id) {
          const { data } = await supabase.from("themes").select("*").eq("id", latestGame.theme_id).single()
          if (data) theme = data
        }

        // Only update if something changed to avoid render loops (simple equality check on updated_at could correspond)
        // Here we just set state, React handles diffing usually, but for complex objects:
        if (JSON.stringify(latestGame) !== JSON.stringify(gameState.game)) {
          setGameState((prev) => ({
            ...prev,
            game: latestGame,
            currentCard,
            theme,
          }))
        }
      }
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

    // Polling fallback to ensure state is fresh even if websockets fail
    const interval = setInterval(fetchLatestState, 2000)

    return () => {
      supabase.removeChannel(channel)
      clearInterval(interval)
    }
  }, [gameState.game.id, supabase, sessionId, router, gameState.currentCard?.id, gameState.theme?.id, gameState.game])

  const handleStartGame = async () => {
    console.log("Starting game...")

    // Get the selected theme from the game state
    const themeId = gameState.theme?.id || "tous"
    console.log("Theme ID:", themeId)

    // Fetch cards - if "tous" or random/custom (handled as logic in lobby?), get all or filter
    // Note: if "tous" was removed from UI but code sends "tous" as fallback, we usually treat it as all.
    let cards
    if (themeId === "tous" || themeId === "random") {
      // @ts-ignore
      const { data } = await supabase.from("cards").select("*")
      cards = data
    } else {
      // @ts-ignore
      const { data } = await supabase.from("cards").select("*").eq("theme_id", themeId)
      cards = data
    }

    console.log("Cards found:", cards?.length || 0)

    if (!cards || cards.length === 0) {
      console.error("No cards found for theme:", themeId)
      // alert("Erreur: Aucune carte trouvée...") // Removed alert
      return
    }

    const randomCard = cards[Math.floor(Math.random() * cards.length)]
    const targetPosition = generateTargetPosition()

    // Récupérer la liste à jour des joueurs
    const { data: currentPlayers, error: playersError } = await supabase.from("game_players").select("*").eq("game_id", gameState.game.id)

    if (playersError) {
      console.error("Error fetching players:", playersError)
      return
    }

    console.log("Current players for start:", currentPlayers?.length)

    if (!currentPlayers || currentPlayers.length < 2) {
      // alert("Il faut au moins 2 joueurs...") // Removed alert for cleaner UX (or could use toast)
      return
    }

    const randomPsychic = currentPlayers[Math.floor(Math.random() * currentPlayers.length)]

    // Mettre à jour les joueurs
    for (const player of currentPlayers) {
      // @ts-ignore
      await supabase
        .from("game_players")
        .update({
          is_psychic: player.id === randomPsychic.id,
          guess_position: null,
        })
        .eq("id", player.id)
    }

    // Démarrer la partie
    // @ts-ignore
    const { error: updateError } = await supabase
      .from("games")
      .update({
        status: "playing",
        current_round: 1,
        current_card_id: randomCard.id,
        target_position: targetPosition,
        current_clue: null,
      })
      .eq("id", gameState.game.id)

    if (updateError) {
      console.error("Failed to start game", updateError)
    }
  }

  if (gameState.game.status === "waiting") {
    return <GameLobby gameState={gameState} onStartGame={handleStartGame} />
  }

  return <GamePlay initialGameState={gameState} />
}
