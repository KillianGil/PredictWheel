// Cartes locales en français pour le mode hors ligne
export interface LocalCard {
  leftExtreme: string
  rightExtreme: string
  theme: string
}

export const LOCAL_CARDS: LocalCard[] = [
  // Classique
  { leftExtreme: "Sous-estimé", rightExtreme: "Surestimé", theme: "classique" },
  { leftExtreme: "Froid", rightExtreme: "Chaud", theme: "classique" },
  { leftExtreme: "Mauvais film", rightExtreme: "Chef-d'œuvre", theme: "classique" },
  { leftExtreme: "Effrayant", rightExtreme: "Rassurant", theme: "classique" },
  { leftExtreme: "Simple", rightExtreme: "Compliqué", theme: "classique" },
  { leftExtreme: "Ennuyeux", rightExtreme: "Passionnant", theme: "classique" },
  { leftExtreme: "Ancien", rightExtreme: "Moderne", theme: "classique" },
  { leftExtreme: "Petit", rightExtreme: "Immense", theme: "classique" },
  { leftExtreme: "Laid", rightExtreme: "Magnifique", theme: "classique" },
  { leftExtreme: "Lent", rightExtreme: "Rapide", theme: "classique" },
  { leftExtreme: "Silencieux", rightExtreme: "Bruyant", theme: "classique" },
  { leftExtreme: "Dégoûtant", rightExtreme: "Délicieux", theme: "classique" },
  { leftExtreme: "Dangereux", rightExtreme: "Sûr", theme: "classique" },
  { leftExtreme: "Triste", rightExtreme: "Joyeux", theme: "classique" },
  { leftExtreme: "Difficile", rightExtreme: "Facile", theme: "classique" },

  // Bizarre
  { leftExtreme: "Habitude normale", rightExtreme: "Habitude bizarre", theme: "bizarre" },
  { leftExtreme: "Sujet de conversation normal", rightExtreme: "Sujet de conversation gênant", theme: "bizarre" },
  { leftExtreme: "Acceptable en public", rightExtreme: "Inacceptable en public", theme: "bizarre" },
  { leftExtreme: "Premier rendez-vous normal", rightExtreme: "Red flag", theme: "bizarre" },
  { leftExtreme: "Excuse valable pour être en retard", rightExtreme: "Excuse ridicule", theme: "bizarre" },
  { leftExtreme: "Animal de compagnie normal", rightExtreme: "Animal de compagnie étrange", theme: "bizarre" },
  { leftExtreme: "Cadeau normal", rightExtreme: "Cadeau inapproprié", theme: "bizarre" },
  { leftExtreme: "Raison normale de pleurer", rightExtreme: "Raison ridicule de pleurer", theme: "bizarre" },
  {
    leftExtreme: "Chose normale à dire à son patron",
    rightExtreme: "Chose gênante à dire à son patron",
    theme: "bizarre",
  },
  { leftExtreme: "Comportement normal en avion", rightExtreme: "Comportement inacceptable en avion", theme: "bizarre" },

  // Société
  { leftExtreme: "Métier sous-payé", rightExtreme: "Métier surpayé", theme: "société" },
  { leftExtreme: "Influenceur sans talent", rightExtreme: "Génie créatif", theme: "société" },
  { leftExtreme: "Peu important pour la société", rightExtreme: "Essentiel pour la société", theme: "société" },
  { leftExtreme: "Invention inutile", rightExtreme: "Invention révolutionnaire", theme: "société" },
  { leftExtreme: "Époque où j'aurais aimé vivre", rightExtreme: "Époque horrible", theme: "société" },
  { leftExtreme: "Peu de stress", rightExtreme: "Très stressant", theme: "société" },
  { leftExtreme: "Travail facile", rightExtreme: "Travail éprouvant", theme: "société" },
  { leftExtreme: "Pas besoin de diplôme", rightExtreme: "Bac+12 minimum", theme: "société" },

  // Pop Culture
  { leftExtreme: "Méchant incompétent", rightExtreme: "Méchant terrifiant", theme: "popculture" },
  { leftExtreme: "Super-héros faible", rightExtreme: "Super-héros surpuissant", theme: "popculture" },
  { leftExtreme: "Personnage détestable", rightExtreme: "Personnage adorable", theme: "popculture" },
  { leftExtreme: "Série à éviter", rightExtreme: "Série à binge-watcher", theme: "popculture" },
  { leftExtreme: "Tube de l'été oubliable", rightExtreme: "Classique intemporel", theme: "popculture" },
  { leftExtreme: "Chanson pour danser", rightExtreme: "Chanson pour pleurer", theme: "popculture" },
  { leftExtreme: "Artiste one-hit wonder", rightExtreme: "Légende de la musique", theme: "popculture" },

  // Nourriture
  { leftExtreme: "Nourriture de cantine", rightExtreme: "Repas gastronomique", theme: "nourriture" },
  { leftExtreme: "À manger froid", rightExtreme: "À manger chaud", theme: "nourriture" },
  { leftExtreme: "Petit-déjeuner", rightExtreme: "Dîner romantique", theme: "nourriture" },
  { leftExtreme: "Repas rapide", rightExtreme: "Repas qui prend des heures", theme: "nourriture" },
  { leftExtreme: "Nourriture saine", rightExtreme: "Nourriture qui va me tuer", theme: "nourriture" },
  { leftExtreme: "Goût d'enfant", rightExtreme: "Goût d'adulte", theme: "nourriture" },
  { leftExtreme: "Moins de 5€", rightExtreme: "Plus de 100€", theme: "nourriture" },
]

export const LOCAL_THEMES = [
  { id: "classique", name: "Classique", description: "Opposés classiques" },
  { id: "bizarre", name: "Bizarre", description: "Situations étranges" },
  { id: "société", name: "Société", description: "Le monde actuel" },
  { id: "popculture", name: "Pop Culture", description: "Films, séries, musique" },
  { id: "nourriture", name: "Nourriture", description: "Tout ce qui se mange" },
  { id: "tous", name: "Tous", description: "Toutes les catégories" },
]

export function getRandomCard(theme: string): LocalCard {
  const cards = theme === "tous" ? LOCAL_CARDS : LOCAL_CARDS.filter((card) => card.theme === theme)

  return cards[Math.floor(Math.random() * cards.length)]
}
