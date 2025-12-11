export interface Theme {
  id: string
  name: string
  description: string | null
}

export interface Card {
  id: string
  theme_id: string
  left_extreme: string
  right_extreme: string
}

export interface Game {
  id: string
  code: string
  status: "waiting" | "playing" | "finished"
  current_round: number
  max_rounds: number
  theme_id: string | null
  target_position: number | null
  current_card_id: string | null
  current_clue: string | null
  created_at: string
  updated_at: string
}

export interface GamePlayer {
  id: string
  game_id: string
  player_name: string
  session_id: string
  is_host: boolean
  is_psychic: boolean
  score: number
  guess_position: number | null
}

export interface GameState {
  game: Game
  players: GamePlayer[]
  currentCard: Card | null
  theme: Theme | null
}

export type GamePhase =
  | "waiting" // En attente de joueurs
  | "psychic" // Le médium donne son indice
  | "guessing" // Les joueurs devinent
  | "reveal" // Révélation des résultats
  | "finished" // Partie terminée

export interface LocalPlayer {
  id: string
  name: string
  score: number
}

export interface LocalGameState {
  players: LocalPlayer[]
  currentRound: number
  maxRounds: number
  theme: string
  currentCard: {
    leftExtreme: string
    rightExtreme: string
  } | null
  targetPosition: number | null
  currentClue: string | null
  currentPsychicIndex: number
  phase: "setup" | "psychic-view" | "psychic-clue" | "guessing" | "reveal" | "finished"
  guesses: { playerId: string; position: number }[]
  usedCards?: { leftExtreme: string; rightExtreme: string }[]
}
