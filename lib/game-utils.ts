// Génère un code de partie aléatoire
export function generateGameCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  let code = ""
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

// Génère un ID de session unique pour le joueur
export function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Récupère ou crée un session ID
export function getSessionId(): string {
  if (typeof window === "undefined") return ""

  let sessionId = localStorage.getItem("wavelength_session_id")
  if (!sessionId) {
    sessionId = generateSessionId()
    localStorage.setItem("wavelength_session_id", sessionId)
  }
  return sessionId
}

// Calcule les points en fonction de la distance entre la position devinée et la cible
export function calculatePoints(guessPosition: number, targetPosition: number): number {
  const distance = Math.abs(guessPosition - targetPosition)

  // Zone centrale (4 points) - environ 10 degrés
  if (distance <= 5) return 4
  // Zone suivante (3 points) - environ 20 degrés
  if (distance <= 15) return 3
  // Zone externe (2 points) - environ 30 degrés
  if (distance <= 25) return 2
  // Hors zone
  return 0
}

// Génère une position cible aléatoire (entre 15 et 165 degrés pour éviter les extrêmes)
export function generateTargetPosition(): number {
  return Math.floor(Math.random() * 130) + 25 // Entre 25 et 155 degrés
}
