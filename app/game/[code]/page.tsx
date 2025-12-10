import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { GameClient } from "./game-client"

interface PageProps {
  params: Promise<{ code: string }>
}

export default async function GamePage({ params }: PageProps) {
  const { code } = await params
  const supabase = await createClient()

  // Charger la partie
  const { data: game, error: gameError } = await supabase
    .from("games")
    .select("*")
    .eq("code", code.toUpperCase())
    .single()

  if (gameError || !game) {
    redirect("/")
  }

  // Charger les joueurs
  const { data: players } = await supabase.from("game_players").select("*").eq("game_id", game.id)

  // Charger le thème si défini
  let theme = null
  if (game.theme_id) {
    const { data } = await supabase.from("themes").select("*").eq("id", game.theme_id).single()
    theme = data
  }

  // Charger la carte courante si définie
  let currentCard = null
  if (game.current_card_id) {
    const { data } = await supabase.from("cards").select("*").eq("id", game.current_card_id).single()
    currentCard = data
  }

  return (
    <GameClient
      initialGameState={{
        game,
        players: players || [],
        currentCard,
        theme,
      }}
    />
  )
}
