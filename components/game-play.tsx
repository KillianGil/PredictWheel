"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { WavelengthWheel } from "@/components/wavelength-wheel"
import { createClient } from "@/lib/supabase/client"
import type { GameState } from "@/lib/types"
import { getSessionId, calculatePoints, generateTargetPosition } from "@/lib/game-utils"
import { Send, Eye, Users, Trophy, ArrowRight, Waves } from "lucide-react"
import { cn } from "@/lib/utils"

interface GamePlayProps {
  initialGameState: GameState
}

export function GamePlay({ initialGameState }: GamePlayProps) {
  const [gameState, setGameState] = useState<GameState>(initialGameState)
  const [clue, setClue] = useState("")
  const [guessPosition, setGuessPosition] = useState(90)
  const [hasGuessed, setHasGuessed] = useState(false)
  const [phase, setPhase] = useState<"psychic" | "guessing" | "reveal">(
    initialGameState.game.current_clue ? "guessing" : "psychic",
  )

  const supabase = createClient()
  const sessionId = getSessionId()
  const currentPlayer = gameState.players.find((p) => p.session_id === sessionId)
  const isPsychic = currentPlayer?.is_psychic
  const psychicPlayer = gameState.players.find((p) => p.is_psychic)

  useEffect(() => {
    const gameChannel = supabase
      .channel(`game-play-${gameState.game.id}`)
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
          if (updatedGame.current_card_id && updatedGame.current_card_id !== gameState.currentCard?.id) {
            const { data } = await supabase.from("cards").select("*").eq("id", updatedGame.current_card_id).single()
            if (data) currentCard = data
          }

          setGameState((prev) => ({
            ...prev,
            game: updatedGame,
            currentCard,
          }))

          if (updatedGame.current_clue && phase === "psychic") {
            setPhase("guessing")
          }
        },
      )
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
          if (data) {
            setGameState((prev) => ({ ...prev, players: data }))
          }
        },
      )
      .subscribe()

    return () => {
      supabase.removeChannel(gameChannel)
    }
  }, [gameState.game.id, supabase, phase])

  const handleSubmitClue = async () => {
    if (!clue.trim()) return

    await supabase.from("games").update({ current_clue: clue }).eq("id", gameState.game.id)

    setPhase("guessing")
  }

  const handleSubmitGuess = async () => {
    if (!currentPlayer) return

    await supabase.from("game_players").update({ guess_position: guessPosition }).eq("id", currentPlayer.id)

    setHasGuessed(true)

    const { data: players } = await supabase
      .from("game_players")
      .select("*")
      .eq("game_id", gameState.game.id)
      .eq("is_psychic", false)

    const allGuessed = players?.every((p) => p.guess_position !== null || p.id === currentPlayer.id)

    if (allGuessed) {
      setPhase("reveal")

      if (gameState.game.target_position !== null) {
        for (const player of players || []) {
          const guess = player.id === currentPlayer.id ? guessPosition : player.guess_position
          if (guess !== null) {
            const points = calculatePoints(guess, gameState.game.target_position)
            await supabase
              .from("game_players")
              .update({ score: player.score + points })
              .eq("id", player.id)
          }
        }
      }
    }
  }

  const handleNextRound = async () => {
    // Get a new card
    const { data: cards } = await supabase.from("cards").select("*").eq("theme_id", gameState.theme?.id)

    if (!cards || cards.length === 0) return

    const randomCard = cards[Math.floor(Math.random() * cards.length)]
    const targetPosition = generateTargetPosition()

    // Rotate psychic to next player
    const currentPsychicIndex = gameState.players.findIndex((p) => p.is_psychic)
    const nextPsychicIndex = (currentPsychicIndex + 1) % gameState.players.length
    const nextPsychic = gameState.players[nextPsychicIndex]

    // Reset all players
    for (const player of gameState.players) {
      await supabase
        .from("game_players")
        .update({
          is_psychic: player.id === nextPsychic.id,
          guess_position: null,
        })
        .eq("id", player.id)
    }

    // Update game
    await supabase
      .from("games")
      .update({
        current_round: gameState.game.current_round + 1,
        current_card_id: randomCard.id,
        target_position: targetPosition,
        current_clue: null,
      })
      .eq("id", gameState.game.id)

    setPhase("psychic")
    setClue("")
    setHasGuessed(false)
    setGuessPosition(90)
  }

  const guessersWhoGuessed = gameState.players.filter((p) => !p.is_psychic && p.guess_position !== null).length
  const totalGuessers = gameState.players.filter((p) => !p.is_psychic).length
  const isLastRound = gameState.game.current_round >= gameState.game.max_rounds

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Waves className="h-5 w-5 text-primary" />
            </div>
            <Badge variant="outline" className="text-base px-4 py-2 font-semibold">
              Manche {gameState.game.current_round}/{gameState.game.max_rounds}
            </Badge>
          </div>
          <Badge variant="secondary" className="gap-2 px-3 py-2">
            <Users className="h-4 w-4" />
            {gameState.players.length}
          </Badge>
        </div>

        {/* La roue */}
        <Card className="shadow-lg border-border/50 overflow-hidden">
          <CardContent className="pt-8 pb-6">
            <WavelengthWheel
              targetPosition={gameState.game.target_position ?? 90}
              showTarget={phase === "reveal" || isPsychic}
              showZones={phase === "reveal"}
              guessPosition={guessPosition}
              onGuessChange={setGuessPosition}
              interactive={!isPsychic && phase === "guessing" && !hasGuessed}
              leftExtreme={gameState.currentCard?.left_extreme || "Extrême gauche"}
              rightExtreme={gameState.currentCard?.right_extreme || "Extrême droite"}
            />
          </CardContent>
        </Card>

        {/* Zone d'action selon le rôle et la phase */}
        <Card className="shadow-lg border-border/50">
          <CardHeader className="pb-4">
            <CardTitle className="text-center text-lg">
              {isPsychic ? (
                <span className="flex items-center justify-center gap-2 text-primary">
                  <Eye className="h-5 w-5" />
                  Vous êtes le Médium
                </span>
              ) : (
                <span className="text-foreground">{psychicPlayer?.player_name} est le Médium</span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Phase Médium */}
            {isPsychic && phase === "psychic" && (
              <>
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <p className="text-center text-foreground">
                    La cible est placée. Donnez un indice pour aider les autres joueurs à la trouver !
                  </p>
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Entrez votre indice..."
                    value={clue}
                    onChange={(e) => setClue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmitClue()}
                    className="h-12 text-base"
                  />
                  <Button size="icon" className="h-12 w-12" onClick={handleSubmitClue} disabled={!clue.trim()}>
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </>
            )}

            {/* Phase Deviner */}
            {!isPsychic && phase === "guessing" && (
              <>
                <div className="text-center space-y-3">
                  <p className="text-sm text-muted-foreground">L'indice du Médium :</p>
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <p className="text-2xl font-bold text-primary">"{gameState.game.current_clue}"</p>
                  </div>
                </div>
                {!hasGuessed ? (
                  <Button className="w-full h-12 text-base font-semibold" size="lg" onClick={handleSubmitGuess}>
                    Valider ma position
                  </Button>
                ) : (
                  <div className="p-4 bg-muted/50 rounded-xl text-center">
                    <p className="text-muted-foreground">
                      En attente des autres joueurs... ({guessersWhoGuessed}/{totalGuessers})
                    </p>
                  </div>
                )}
              </>
            )}

            {/* Médium attend */}
            {isPsychic && phase === "guessing" && (
              <div className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">Votre indice :</p>
                <div className="p-4 bg-muted/50 rounded-xl">
                  <p className="text-xl font-semibold text-foreground">"{gameState.game.current_clue}"</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  En attente des réponses... ({guessersWhoGuessed}/{totalGuessers})
                </p>
              </div>
            )}

            {/* Phase Révélation */}
            {phase === "reveal" && (
              <div className="space-y-4">
                <div className="p-4 bg-accent/10 rounded-xl border border-accent/20 text-center">
                  <p className="text-lg font-semibold text-foreground">
                    La cible était à {Math.round(gameState.game.target_position ?? 0)}°
                  </p>
                </div>
                <div className="space-y-2">
                  {gameState.players
                    .filter((p) => !p.is_psychic)
                    .sort((a, b) => {
                      const pointsA =
                        a.guess_position !== null && gameState.game.target_position !== null
                          ? calculatePoints(a.guess_position, gameState.game.target_position)
                          : 0
                      const pointsB =
                        b.guess_position !== null && gameState.game.target_position !== null
                          ? calculatePoints(b.guess_position, gameState.game.target_position)
                          : 0
                      return pointsB - pointsA
                    })
                    .map((player) => {
                      const points =
                        player.guess_position !== null && gameState.game.target_position !== null
                          ? calculatePoints(player.guess_position, gameState.game.target_position)
                          : 0
                      return (
                        <div
                          key={player.id}
                          className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border/50"
                        >
                          <span className="font-medium text-foreground">{player.player_name}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-muted-foreground">
                              {Math.round(player.guess_position ?? 0)}°
                            </span>
                            <Badge
                              variant={points >= 4 ? "default" : points >= 2 ? "secondary" : "outline"}
                              className="min-w-[60px] justify-center"
                            >
                              +{points} pts
                            </Badge>
                          </div>
                        </div>
                      )
                    })}
                </div>
                {currentPlayer?.is_host && (
                  <Button className="w-full h-12 text-base font-semibold" onClick={handleNextRound}>
                    {isLastRound ? (
                      <>
                        <Trophy className="h-5 w-5 mr-2" />
                        Voir les résultats
                      </>
                    ) : (
                      <>
                        <ArrowRight className="h-5 w-5 mr-2" />
                        Manche suivante
                      </>
                    )}
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Scores */}
        <Card className="shadow-lg border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-semibold flex items-center gap-2">
              <Trophy className="h-4 w-4 text-accent" />
              Classement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {gameState.players
                .sort((a, b) => b.score - a.score)
                .map((player, index) => (
                  <div
                    key={player.id}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-lg",
                      index === 0 && player.score > 0 ? "bg-accent/10 border border-accent/20" : "bg-muted/30",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-muted-foreground w-6">{index + 1}</span>
                      <span className="font-medium text-foreground">
                        {player.player_name}
                        {player.is_psychic && <Eye className="inline-block h-4 w-4 ml-2 text-primary" />}
                      </span>
                    </div>
                    <Badge variant="secondary" className="font-bold">
                      {player.score} pts
                    </Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
