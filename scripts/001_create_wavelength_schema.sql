-- Wavelength Game Database Schema

-- Table des thèmes de cartes
CREATE TABLE IF NOT EXISTS themes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des cartes (spectres avec deux extrêmes)
CREATE TABLE IF NOT EXISTS cards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  theme_id UUID REFERENCES themes(id) ON DELETE CASCADE,
  left_extreme TEXT NOT NULL,
  right_extreme TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des parties
CREATE TABLE IF NOT EXISTS games (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  status TEXT NOT NULL DEFAULT 'waiting', -- waiting, playing, finished
  current_round INTEGER DEFAULT 0,
  max_rounds INTEGER DEFAULT 10,
  theme_id UUID REFERENCES themes(id),
  target_position FLOAT, -- Position de la cible (0-180 degrés)
  current_card_id UUID REFERENCES cards(id),
  current_clue TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table des joueurs dans une partie
CREATE TABLE IF NOT EXISTS game_players (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id UUID REFERENCES games(id) ON DELETE CASCADE,
  player_name TEXT NOT NULL,
  session_id TEXT NOT NULL, -- Pour identifier le joueur sans auth
  is_host BOOLEAN DEFAULT FALSE,
  is_psychic BOOLEAN DEFAULT FALSE, -- Le joueur qui donne l'indice
  score INTEGER DEFAULT 0,
  guess_position FLOAT, -- Position devinée par le joueur
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(game_id, session_id)
);

-- Table des scores par manche
CREATE TABLE IF NOT EXISTS round_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id UUID REFERENCES games(id) ON DELETE CASCADE,
  round_number INTEGER NOT NULL,
  card_id UUID REFERENCES cards(id),
  target_position FLOAT NOT NULL,
  clue TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies (désactivé car pas d'auth requise pour ce jeu)
-- Les joueurs s'identifient par session_id

-- Indexes pour performance
CREATE INDEX IF NOT EXISTS idx_games_code ON games(code);
CREATE INDEX IF NOT EXISTS idx_game_players_game_id ON game_players(game_id);
CREATE INDEX IF NOT EXISTS idx_cards_theme_id ON cards(theme_id);
