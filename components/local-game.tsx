"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { WavelengthWheel } from "@/components/wavelength-wheel"
import { getRandomCard, LOCAL_THEMES } from "@/lib/local-cards"
import { generateTargetPosition, calculatePoints } from "@/lib/game-utils"
import type { LocalPlayer, LocalGameState } from "@/lib/types"
import { Users, Plus, Trash2, Play, Eye, EyeOff, Send, ArrowRight, Trophy, RotateCcw, Home, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface LocalGameProps {
  onBack: () => void
}

export function LocalGame({ onBack }: LocalGameProps) {
  const [gameState, setGameState] = useState<LocalGameState>({
    players: [],
    currentRound: 1,
    maxRounds: 5,
    theme: "tous",
    currentCard: null,
    targetPosition: null,
    currentClue: null,
    currentPsychicIndex: 0,
    phase: "setup",
    guesses: [],
  })
  const [newPlayerName, setNewPlayerName] = useState("")
  const [clue, setClue] = useState("")
  const [currentGuess, setCurrentGuess] = useState(90)
  const [currentGuesserIndex, setCurrentGuesserIndex] = useState(0)
  const [showTarget, setShowTarget] = useState(false)
  const [showQuitConfirm, setShowQuitConfirm] = useState(false)

  const currentPsychic = gameState.players[gameState.currentPsychicIndex]
  const guessers = gameState.players.filter((_, i) => i !== gameState.currentPsychicIndex)

  const addPlayer = () => {
    if (!newPlayerName.trim() || gameState.players.length >= 8) return
    const newPlayer: LocalPlayer = {
      id: `player_${Date.now()}`,
      name: newPlayerName.trim(),
      score: 0,
    }
    setGameState((prev) => ({ ...prev, players: [...prev.players, newPlayer] }))
    setNewPlayerName("")
  }

  const removePlayer = (id: string) => {
    setGameState((prev) => ({ ...prev, players: prev.players.filter((p) => p.id !== id) }))
  }

  const startGame = () => {
    const card = getRandomCard(gameState.theme)
    const target = generateTargetPosition()
    setGameState((prev) => ({
      ...prev,
      currentCard: { leftExtreme: card.leftExtreme, rightExtreme: card.rightExtreme },
      targetPosition: target,
      phase: "psychic-view",
      currentRound: 1,
      guesses: [],
    }))
    setShowTarget(false)
  }

  const psychicReady = () => setShowTarget(true)

  const psychicHideTarget = () => {
    setShowTarget(false)
    setGameState((prev) => ({ ...prev, phase: "psychic-clue" }))
  }

  const submitClue = () => {
    if (!clue.trim()) return
    setGameState((prev) => ({ ...prev, currentClue: clue, phase: "guessing" }))
    setClue("")
    setCurrentGuesserIndex(0)
    setCurrentGuess(90)
  }

  const submitGuess = () => {
    const guesser = guessers[currentGuesserIndex]
    const newGuesses = [...gameState.guesses, { playerId: guesser.id, position: currentGuess }]

    if (currentGuesserIndex >= guessers.length - 1) {
      const updatedPlayers = gameState.players.map((player) => {
        const guess = newGuesses.find((g) => g.playerId === player.id)
        if (guess && gameState.targetPosition !== null) {
          const points = calculatePoints(guess.position, gameState.targetPosition)
          return { ...player, score: player.score + points }
        }
        return player
      })
      setGameState((prev) => ({ ...prev, guesses: newGuesses, players: updatedPlayers, phase: "reveal" }))
    } else {
      setGameState((prev) => ({ ...prev, guesses: newGuesses }))
      setCurrentGuesserIndex((prev) => prev + 1)
      setCurrentGuess(90)
    }
  }

  const nextRound = () => {
    if (gameState.currentRound >= gameState.maxRounds) {
      setGameState((prev) => ({ ...prev, phase: "finished" }))
      return
    }
    const card = getRandomCard(gameState.theme)
    const target = generateTargetPosition()
    const nextPsychicIndex = (gameState.currentPsychicIndex + 1) % gameState.players.length
    setGameState((prev) => ({
      ...prev,
      currentCard: { leftExtreme: card.leftExtreme, rightExtreme: card.rightExtreme },
      targetPosition: target,
      currentClue: null,
      currentPsychicIndex: nextPsychicIndex,
      currentRound: prev.currentRound + 1,
      phase: "psychic-view",
      guesses: [],
    }))
    setShowTarget(false)
    setCurrentGuesserIndex(0)
  }

  const restartGame = () => {
    setGameState((prev) => ({
      ...prev,
      players: prev.players.map((p) => ({ ...p, score: 0 })),
      currentRound: 1,
      currentPsychicIndex: 0,
      phase: "setup",
      currentCard: null,
      targetPosition: null,
      currentClue: null,
      guesses: [],
    }))
  }

  // Header with quit button for in-game phases
  const GameHeader = ({ showRound = true }: { showRound?: boolean }) => (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={() => setShowQuitConfirm(true)}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <X className="h-5 w-5" />
        <span className="text-sm">Quitter</span>
      </button>
      {showRound && (
        <div className="px-3 py-1 bg-muted rounded-full text-sm font-medium">
          {gameState.currentRound}/{gameState.maxRounds}
        </div>
      )}
    </div>
  )

  // Quit confirmation modal
  const QuitConfirmModal = () => (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-2xl p-6 max-w-sm w-full space-y-4">
        <h3 className="text-xl font-bold text-center">Quitter la partie ?</h3>
        <p className="text-muted-foreground text-center">La progression sera perdue.</p>
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setShowQuitConfirm(false)}>
            Annuler
          </Button>
          <Button variant="destructive" className="flex-1" onClick={onBack}>
            Quitter
          </Button>
        </div>
      </div>
    </div>
  )

  // Phase Setup
  if (gameState.phase === "setup") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 p-4 pb-8">
        <div className="max-w-md mx-auto space-y-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Retour</span>
          </button>

          <div className="text-center py-4">
            <h1 className="text-3xl font-bold">Mode Local</h1>
            <p className="text-muted-foreground mt-1">Passez-vous le téléphone</p>
          </div>

          {/* Joueurs */}
          <div className="bg-card rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold flex items-center gap-2">
                <Users className="h-5 w-5" />
                Joueurs
              </h2>
              <span className="text-sm text-muted-foreground">{gameState.players.length}/8</span>
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Nom du joueur..."
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addPlayer()}
                maxLength={12}
                className="h-12"
              />
              <Button size="icon" className="h-12 w-12 shrink-0" onClick={addPlayer}>
                <Plus className="h-5 w-5" />
              </Button>
            </div>

            {gameState.players.length > 0 && (
              <div className="space-y-2">
                {gameState.players.map((player, index) => (
                  <div key={player.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="font-medium">{player.name}</span>
                    </div>
                    <button
                      onClick={() => removePlayer(player.id)}
                      className="text-muted-foreground hover:text-destructive transition-colors p-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {gameState.players.length < 2 && (
              <p className="text-sm text-muted-foreground text-center">Ajoutez au moins 2 joueurs</p>
            )}
          </div>

          {/* Thème */}
          <div className="bg-card rounded-2xl p-5 space-y-4">
            <h2 className="font-semibold">Thème</h2>
            <div className="grid grid-cols-3 gap-2">
              {LOCAL_THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setGameState((prev) => ({ ...prev, theme: theme.id }))}
                  className={cn(
                    "p-3 rounded-xl text-left transition-all",
                    gameState.theme === theme.id ? "bg-primary text-primary-foreground" : "bg-muted/50 hover:bg-muted",
                  )}
                >
                  <div className="font-medium text-sm">{theme.name}</div>
                  <div
                    className={cn(
                      "text-xs mt-0.5 truncate",
                      gameState.theme === theme.id ? "text-primary-foreground/70" : "text-muted-foreground",
                    )}
                  >
                    {theme.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Manches */}
          <div className="bg-card rounded-2xl p-5 space-y-4">
            <h2 className="font-semibold">Nombre de manches</h2>
            <div className="flex gap-2">
              {[3, 5, 7, 10].map((num) => (
                <button
                  key={num}
                  onClick={() => setGameState((prev) => ({ ...prev, maxRounds: num }))}
                  className={cn(
                    "flex-1 py-3 rounded-xl font-bold transition-all",
                    gameState.maxRounds === num ? "bg-primary text-primary-foreground" : "bg-muted/50 hover:bg-muted",
                  )}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <Button
            className="w-full h-14 text-lg font-semibold rounded-2xl"
            onClick={startGame}
            disabled={gameState.players.length < 2}
          >
            <Play className="h-5 w-5 mr-2" />
            Commencer
          </Button>
        </div>
      </div>
    )
  }

  // Phase: Médium voit la cible
  if (gameState.phase === "psychic-view") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 p-4">
        {showQuitConfirm && <QuitConfirmModal />}
        <div className="max-w-md mx-auto">
          <GameHeader />

          <div className="text-center space-y-6">
            {!showTarget ? (
              <>
                <div className="py-8">
                  <p className="text-muted-foreground mb-2">Passez le téléphone à</p>
                  <h2 className="text-4xl font-bold text-primary">{currentPsychic?.name}</h2>
                  <p className="text-muted-foreground mt-2">C'est ton tour d'être le Médium</p>
                </div>
                <Button className="w-full h-14 text-lg rounded-2xl" onClick={psychicReady}>
                  <Eye className="h-5 w-5 mr-2" />
                  Je suis {currentPsychic?.name}
                </Button>
              </>
            ) : (
              <>
                <WavelengthWheel
                  targetPosition={gameState.targetPosition ?? 90}
                  showTarget={true}
                  showZones={true}
                  interactive={false}
                  leftExtreme={gameState.currentCard?.leftExtreme || ""}
                  rightExtreme={gameState.currentCard?.rightExtreme || ""}
                />

                <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4">
                  <p className="font-medium text-amber-600 dark:text-amber-400">Mémorise la position de la cible !</p>
                </div>

                <Button className="w-full h-14 text-lg rounded-2xl" onClick={psychicHideTarget}>
                  <EyeOff className="h-5 w-5 mr-2" />
                  J'ai mémorisé
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  // Phase: Médium donne son indice
  if (gameState.phase === "psychic-clue") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 p-4">
        {showQuitConfirm && <QuitConfirmModal />}
        <div className="max-w-md mx-auto">
          <GameHeader />

          <WavelengthWheel
            targetPosition={gameState.targetPosition ?? 90}
            showTarget={false}
            showZones={false}
            interactive={false}
            leftExtreme={gameState.currentCard?.leftExtreme || ""}
            rightExtreme={gameState.currentCard?.rightExtreme || ""}
          />

          <div className="mt-6 space-y-4">
            <div className="text-center">
              <p className="text-muted-foreground">{currentPsychic?.name}, donne un indice</p>
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Ton indice..."
                value={clue}
                onChange={(e) => setClue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitClue()}
                className="h-14 text-lg rounded-2xl"
                autoFocus
              />
              <Button
                size="icon"
                className="h-14 w-14 rounded-2xl shrink-0"
                onClick={submitClue}
                disabled={!clue.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Phase: Joueurs devinent
  if (gameState.phase === "guessing") {
    const currentGuesser = guessers[currentGuesserIndex]

    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 p-4">
        {showQuitConfirm && <QuitConfirmModal />}
        <div className="max-w-md mx-auto">
          <GameHeader />

          <div className="text-center mb-4">
            <p className="text-muted-foreground text-sm">Passez à</p>
            <h2 className="text-2xl font-bold text-primary">{currentGuesser?.name}</h2>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mb-4 text-center">
            <p className="text-sm text-muted-foreground">L'indice :</p>
            <p className="text-2xl font-bold text-primary">"{gameState.currentClue}"</p>
          </div>

          <WavelengthWheel
            targetPosition={gameState.targetPosition ?? 90}
            showTarget={false}
            showZones={false}
            guessPosition={currentGuess}
            onGuessChange={setCurrentGuess}
            interactive={true}
            leftExtreme={gameState.currentCard?.leftExtreme || ""}
            rightExtreme={gameState.currentCard?.rightExtreme || ""}
          />

          <Button className="w-full h-14 text-lg rounded-2xl mt-6" onClick={submitGuess}>
            Valider
          </Button>

          <p className="text-center text-sm text-muted-foreground mt-3">
            Joueur {currentGuesserIndex + 1}/{guessers.length}
          </p>
        </div>
      </div>
    )
  }

  // Phase: Révélation
  if (gameState.phase === "reveal") {
    const guessResults = gameState.guesses
      .map((guess) => {
        const player = gameState.players.find((p) => p.id === guess.playerId)
        const points = gameState.targetPosition !== null ? calculatePoints(guess.position, gameState.targetPosition) : 0
        return { ...guess, player, points }
      })
      .sort((a, b) => b.points - a.points)

    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 p-4 pb-8">
        {showQuitConfirm && <QuitConfirmModal />}
        <div className="max-w-md mx-auto space-y-6">
          <GameHeader />

          <WavelengthWheel
            targetPosition={gameState.targetPosition ?? 90}
            showTarget={true}
            showZones={true}
            interactive={false}
            leftExtreme={gameState.currentCard?.leftExtreme || ""}
            rightExtreme={gameState.currentCard?.rightExtreme || ""}
          />

          <div className="bg-card rounded-2xl p-5 space-y-3">
            <p className="text-center text-muted-foreground">
              Indice : <span className="font-semibold text-foreground">"{gameState.currentClue}"</span>
            </p>

            <div className="space-y-2">
              {guessResults.map(({ playerId, player, points }) => (
                <div key={playerId} className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                  <span className="font-medium">{player?.name}</span>
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-sm font-bold",
                      points >= 4
                        ? "bg-green-500/20 text-green-600"
                        : points >= 2
                          ? "bg-amber-500/20 text-amber-600"
                          : "bg-muted text-muted-foreground",
                    )}
                  >
                    +{points}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Classement */}
          <div className="bg-card rounded-2xl p-5 space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Trophy className="h-4 w-4 text-amber-500" />
              Classement
            </h3>
            <div className="space-y-2">
              {[...gameState.players]
                .sort((a, b) => b.score - a.score)
                .map((player, index) => (
                  <div
                    key={player.id}
                    className={cn(
                      "flex items-center justify-between p-3 rounded-xl",
                      index === 0 && player.score > 0 ? "bg-amber-500/10" : "bg-muted/30",
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "w-6 h-6 rounded-full text-sm font-bold flex items-center justify-center",
                          index === 0 && player.score > 0
                            ? "bg-amber-500 text-white"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        {index + 1}
                      </span>
                      <span className="font-medium">{player.name}</span>
                    </div>
                    <span className="font-bold">{player.score} pts</span>
                  </div>
                ))}
            </div>
          </div>

          <Button className="w-full h-14 text-lg rounded-2xl" onClick={nextRound}>
            {gameState.currentRound >= gameState.maxRounds ? (
              <>
                <Trophy className="h-5 w-5 mr-2" />
                Résultats finaux
              </>
            ) : (
              <>
                <ArrowRight className="h-5 w-5 mr-2" />
                Manche suivante
              </>
            )}
          </Button>
        </div>
      </div>
    )
  }

  // Phase: Terminé
  if (gameState.phase === "finished") {
    const sortedPlayers = [...gameState.players].sort((a, b) => b.score - a.score)
    const winner = sortedPlayers[0]

    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 p-4 flex items-center justify-center">
        <div className="max-w-md w-full space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="h-10 w-10 text-amber-500" />
            </div>
            <h1 className="text-3xl font-bold">Partie terminée !</h1>
            <p className="text-muted-foreground mt-2">
              {winner?.name} gagne avec {winner?.score} points
            </p>
          </div>

          <div className="bg-card rounded-2xl p-5 space-y-2">
            {sortedPlayers.map((player, index) => (
              <div
                key={player.id}
                className={cn(
                  "flex items-center justify-between p-4 rounded-xl",
                  index === 0 ? "bg-amber-500/10 border border-amber-500/20" : "bg-muted/30",
                )}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "w-8 h-8 rounded-full text-lg font-bold flex items-center justify-center",
                      index === 0 ? "bg-amber-500 text-white" : "bg-muted text-muted-foreground",
                    )}
                  >
                    {index + 1}
                  </span>
                  <span className="font-semibold text-lg">{player.name}</span>
                </div>
                <span className="font-bold text-lg">{player.score} pts</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 h-14 rounded-2xl bg-transparent" onClick={onBack}>
              <Home className="h-5 w-5 mr-2" />
              Accueil
            </Button>
            <Button className="flex-1 h-14 rounded-2xl" onClick={restartGame}>
              <RotateCcw className="h-5 w-5 mr-2" />
              Rejouer
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
