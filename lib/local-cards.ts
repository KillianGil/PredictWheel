import { id } from "date-fns/locale";

// Cartes locales en français pour le mode hors ligne
export interface LocalCard {
  leftExtreme: string
  rightExtreme: string
  theme: string
}

export const LOCAL_CARDS: LocalCard[] = [
  // --- CLASSIQUE (Relations, Vie sociale, Général) ---
  // Indices attendus : Une situation, un lieu, une phrase, un objet.
  { leftExtreme: "Pire façon de larguer", rightExtreme: "Meilleur façon de larguer", theme: "classique" },
  { leftExtreme: "Pire endroit pour un date", rightExtreme: "Lieu de date incroyable", theme: "classique" },
  { leftExtreme: "Cadeau d'anniversaire pourri", rightExtreme: "Cadeau d'anniversaire parfait", theme: "classique" },
  { leftExtreme: "Animal inutile", rightExtreme: "Animal majestueux", theme: "classique" },
  { leftExtreme: "Pire Super-pouvoir", rightExtreme: "Meilleur Super-pouvoir", theme: "classique" },
  { leftExtreme: "Pire excuse de retard", rightExtreme: "Meilleure Excuse", theme: "classique" },
  { leftExtreme: "Pire Marque de vêtements", rightExtreme: "Meilleur Marque de vêtements", theme: "classique" },
  { leftExtreme: "Pire job d'été", rightExtreme: "Meilleur job d'été", theme: "classique" },
  { leftExtreme: "Sujet de conversation gênant", rightExtreme: "Sujet passionnant", theme: "classique" },
  { leftExtreme: "Personne la plus détestée au monde", rightExtreme: "Personne adorée de tous", theme: "classique" },
  { leftExtreme: "Pire phobie", rightExtreme: "Phobie ridicule", theme: "classique" },
  { leftExtreme: "Red Flag chez un mec/une meuf", rightExtreme: "Green Flag absolu", theme: "classique" },
  { leftExtreme: "Célébrité insupportable", rightExtreme: "Célébrité avec qui tu veux boire un verre", theme: "classique" },
  { leftExtreme: "Pire tâche ménagère", rightExtreme: "Tâche ménagère satisfaisante", theme: "classique" },
  { leftExtreme: "Objet inutile à emmener sur une île déserte", rightExtreme: "Objet indispensable à la survie", theme: "classique" },
  { leftExtreme: "Pire ville à habiter", rightExtreme: "Meilleure ville à habiter", theme: "classique" },
  { leftExtreme: "Pire insulte", rightExtreme: "Meilleur compliment", theme: "classique" },
  { leftExtreme: "Pire façon de mourir", rightExtreme: "Mort héroïque", theme: "classique" },
  { leftExtreme: "Influenceur vide", rightExtreme: "Créateur de contenu génial", theme: "classique" },
  { leftExtreme: "Tâche ménagère horrible", rightExtreme: "Tâche ménagère satisfaisante", theme: "classique" },
  { leftExtreme: "Anime surcoté", rightExtreme: "Anime Masterclass", theme: "cinema" },
  { leftExtreme: "Générique qu'on skip", rightExtreme: "Générique classique", theme: "cinema" },
  { leftExtreme: "Pire hobby", rightExtreme: "Meilleur hobby", theme: "classique" },
  { leftExtreme: "Tatouage beauf", rightExtreme: "Tatouage œuvre d'art", theme: "classique" },

  // --- SPORT (Basket, Foot, F1, MMA...) ---
  // Indices attendus : Nom de joueur, Nom de club, Nom de sport.
  { leftExtreme: "Sport sans cardio", rightExtreme: "Sport avec beaucoup de cardio", theme: "sport" },
  { leftExtreme: "Joueur surcoté ", rightExtreme: "GOAT", theme: "sport" },
  { leftExtreme: "Équipe qui perd tout le temps", rightExtreme: "Dynastie imbattable", theme: "sport" },
  { leftExtreme: "Sport qu'on regarde juste pour les JO", rightExtreme: "Sport qu'on regarde toute l'année", theme: "sport" },
  { leftExtreme: "Maillot de foot moche", rightExtreme: "Maillot légendaire", theme: "sport" },
  { leftExtreme: "Pire célébration de but", rightExtreme: "Célébraiton iconique", theme: "sport" },
  { leftExtreme: "Sport dangereux", rightExtreme: "Sport sans risque", theme: "sport" },
  { leftExtreme: "Entraîneur détesté", rightExtreme: "Génie tactique", theme: "sport" },
  { leftExtreme: "Stade avec la pire ambiance", rightExtreme: "Stade avec la meilleure ambiance", theme: "sport" },
  { leftExtreme: "Moment sportif honteux", rightExtreme: "Moment d'histoire", theme: "sport" },
  { leftExtreme: "Sport de riche", rightExtreme: "Sport de pauvre", theme: "sport" },
  { leftExtreme: "Joueur du banc", rightExtreme: "Titulaire indiscutable", theme: "sport" },
  { leftExtreme: "Athlète arrogant", rightExtreme: "Athlète humble", theme: "sport" },
  { leftExtreme: "Pire transfert de l'histoire", rightExtreme: "Meilleur recrutement", theme: "sport" },
  { leftExtreme: "Combattant de MMA surcoté", rightExtreme: "Combattant de MMA classique", theme: "sport" },
  { leftExtreme: "Pire match", rightExtreme: "Match classique", theme: "sport" },
  { leftExtreme: "Pilote de F1 surcoté", rightExtreme: "Pilote de F1 GOAT", theme: "sport" },
  { leftExtreme: "Action anti-jeu", rightExtreme: "Geste Fair-play", theme: "sport" },


  // --- CINÉMA / SÉRIES ---
  // Indices attendus : Titre de film/série, Nom de personnage, Acteur.
  { leftExtreme: "Film chiant à mourir", rightExtreme: "Film très divertissant", theme: "cinema" },
  { leftExtreme: "Personnage le plus inutile", rightExtreme: "Héros indispensable", theme: "cinema" },
  { leftExtreme: "Avenger le plus faible", rightExtreme: "Avenger le plus fort", theme: "cinema" },
  { leftExtreme: "Chanson Disney insupportable", rightExtreme: "Chanson Disney banger", theme: "cinema" },
  { leftExtreme: "Pire maison d'Harry Potter", rightExtreme: "Meilleure maison d'Harry Potter", theme: "cinema" },
  { leftExtreme: "Méchante caricature", rightExtreme: "Méchant complexe et stylé", theme: "cinema" },
  { leftExtreme: "Série surcotée", rightExtreme: "Série culte", theme: "cinema" },
  { leftExtreme: "Acteur qui joue mal", rightExtreme: "Acteur de génie", theme: "cinema" },
  { leftExtreme: "Pire suite de film ", rightExtreme: "Suite meilleure que l'original", theme: "cinema" },
  { leftExtreme: "Film de beauf", rightExtreme: "Film d'auteur", theme: "cinema" },
  { leftExtreme: "Couple gênant à l'écran", rightExtreme: "Couple goal", theme: "cinema" },
  { leftExtreme: "Mort de personnage satisfaisante", rightExtreme: "Mort qui fait chialer", theme: "cinema" },
  { leftExtreme: "Univers sombre", rightExtreme: "Univers joyeux", theme: "cinema" },
  { leftExtreme: "Fin de série ratée", rightExtreme: "Fin parfaite", theme: "cinema" },
  { leftExtreme: "Film qu'on a honte d'aimer", rightExtreme: "Chef-d'œuvre reconnu", theme: "cinema" },
  { leftExtreme: "Pire adaptation", rightExtreme: "Meilleure adaptation", theme: "cinema" },
  { leftExtreme: "Sidekick (pote du héros) lourd", rightExtreme: "Meilleur Sidekick", theme: "cinema" },
  { leftExtreme: "Réplique de film ringarde", rightExtreme: "Réplique culte", theme: "cinema" },

  // --- JEU VIDÉO ---
  // Indices attendus : Titre de jeu, Console, Perso, Objet in-game.
  { leftExtreme: "Jeu pour enfant", rightExtreme: "Jeu ultra violent", theme: "jeuvideo" },
  { leftExtreme: "Arme de départ pourrie", rightExtreme: "Arme Cheatée", theme: "jeuvideo" },
  { leftExtreme: "Personnage lent ", rightExtreme: "Personnage rapide ", theme: "jeuvideo" },
  { leftExtreme: "Console flop ", rightExtreme: "Console légendaire ", theme: "jeuvideo" },
  { leftExtreme: "Communauté toxique", rightExtreme: "Meilleure communauté", theme: "jeuvideo" },
  { leftExtreme: "Boss trop facile", rightExtreme: "Boss impossible ", theme: "jeuvideo" },
  { leftExtreme: "Objet Mario Kart inutile", rightExtreme: "Objet Mario Kart qui sauve la game", theme: "jeuvideo" },
  { leftExtreme: "Champion de LoL inutile", rightExtreme: "Champion de LoL 1v9", theme: "jeuvideo" },
  { leftExtreme: "Arme CS éco", rightExtreme: "Arme CS Full Buy", theme: "jeuvideo" },
  { leftExtreme: "Starter Pokémon nul", rightExtreme: "Starter Pokémon légendaire", theme: "jeuvideo" },
  { leftExtreme: "Bloc Minecraft inutile", rightExtreme: "Bloc Minecraft indispensable", theme: "jeuvideo" },
  { leftExtreme: "Équipe FIFA éclatée", rightExtreme: "Équipe FIFA cheatée", theme: "jeuvideo" },
  { leftExtreme: "Pire jeu mobile", rightExtreme: "Meilleur jeu mobile", theme: "jeuvideo" },
  { leftExtreme: "Communauté toxique", rightExtreme: "Communauté en or", theme: "jeuvideo" },
  { leftExtreme: "Pouvoir inutile", rightExtreme: "Pouvoir divin", theme: "jeuvideo" },
  { leftExtreme: "Copie eco+ (Plagiat)", rightExtreme: "Jeu original", theme: "jeuvideo" },
  { leftExtreme: "Jeu Pay-to-Win", rightExtreme: "Jeu Skill pur", theme: "jeuvideo" },
  { leftExtreme: "Licence morte", rightExtreme: "Licence immortelle", theme: "jeuvideo" },
  { leftExtreme: "Map/Niveau horrible", rightExtreme: "Map/Niveau préféré", theme: "jeuvideo" },
  { leftExtreme: "Jeu Pay-to-Win", rightExtreme: "Jeu Free-to-Play honnête", theme: "jeuvideo" },
  { leftExtreme: "Pire coéquipier", rightExtreme: "Meilleur coéquipier", theme: "jeuvideo" },
  { leftExtreme: "Personnage moche", rightExtreme: "Personnage charismatique", theme: "jeuvideo" },
  { leftExtreme: "Jeu le plus bugué", rightExtreme: "Jeu le mieux fini", theme: "jeuvideo" },

  // --- MUSIQUE ---
  // Indices attendus : Nom d'artiste, Titre de chanson, Genre.
  { leftExtreme: "Chanson honteuse", rightExtreme: "Classique intemporel", theme: "musique" },
  { leftExtreme: "Artiste 'One hit wonder' (Un seul tube)", rightExtreme: "Légende de la musique", theme: "musique" },
  { leftExtreme: "Paroles débiles ", rightExtreme: "Paroles de poète", theme: "musique" },
  { leftExtreme: "Instrument ringard ", rightExtreme: "Instrument stylé ", theme: "musique" },
  { leftExtreme: "Musique de pub agaçante", rightExtreme: "B.O. de film épique", theme: "musique" },
  { leftExtreme: "Chanson pour rompre", rightExtreme: "Chanson pour envoyer", theme: "musique" },
  { leftExtreme: "Album décevant", rightExtreme: "Album Masterclass", theme: "musique" },
  { leftExtreme: "Rappeur éclaté", rightExtreme: "GOAT du rap", theme: "musique" },
  { leftExtreme: "Chanson de rupture ", rightExtreme: "Chanson d'été", theme: "musique" },
  { leftExtreme: "Groupe surcoté", rightExtreme: "Groupe sous-coté", theme: "musique" },
  { leftExtreme: "Meilleure musique de soirée", rightExtreme: "Musique qui tue l'ambiance", theme: "musique" },
  { leftExtreme: "Cover d'album moche", rightExtreme: "Cover d'album incroyable", theme: "musique" },
  { leftExtreme: "Clip gênant", rightExtreme: "Clip cinématographique", theme: "musique" },
  { leftExtreme: "Voix insupportable", rightExtreme: "La plus belle voix du monde", theme: "musique" },
  { leftExtreme: "Chanson d'été insupportable", rightExtreme: "Tube de l'été validé", theme: "musique" },

  // --- NOURRITURE ---
  // Indices attendus : Un plat, un ingrédient, une marque, une boisson.
  { leftExtreme: "Plat de cantine (Caoutchouc)", rightExtreme: "Plat gastronomique", theme: "nourriture" }, { leftExtreme: "Marque eco+ (Cola...)", rightExtreme: "Marque prenium (Coca...)", theme: "nourriture" },
  { leftExtreme: "Plat de lendemain de cuite", rightExtreme: "Dîner romantique", theme: "nourriture" },
  { leftExtreme: "Fruit chiant à éplucher/manger", rightExtreme: "Fruit facile (Banane)", theme: "nourriture" },
  { leftExtreme: "Boisson d'enfant", rightExtreme: "Boisson d'adulte", theme: "nourriture" },
  { leftExtreme: "Fast-food bas de gamme", rightExtreme: "Meilleur Burger", theme: "nourriture" },
  { leftExtreme: "Plat qui pue", rightExtreme: "Plat qui sent trop bon", theme: "nourriture" },
  { leftExtreme: "Chocolat dégueu", rightExtreme: "Chocolat incroyable", theme: "nourriture" },
  { leftExtreme: "Pire Pizza", rightExtreme: "Meilleure Pizza", theme: "nourriture" },
  { leftExtreme: "Snack claqué au sol", rightExtreme: "Snack divin devant un film", theme: "nourriture" },
  { leftExtreme: "Sauce fade", rightExtreme: "Sauce légendaire ", theme: "nourriture" },
  { leftExtreme: "Fromage qui pue la mort", rightExtreme: "Fromage doux et crémeux", theme: "nourriture" },
  { leftExtreme: "Snack claqué au sol", rightExtreme: "Snack divin devant un film", theme: "nourriture" },
  { leftExtreme: "Pire burger de McDo", rightExtreme: "Meilleur burger de McDo", theme: "nourriture" },
  { leftExtreme: "Chaîne de Fast-food éclatée", rightExtreme: "Meilleure chaîne de Fast-food", theme: "nourriture" },
  { leftExtreme: "Pire goût de chips", rightExtreme: "Meilleur goût de chips", theme: "nourriture" },
  { leftExtreme: "Pire marque de céréales", rightExtreme: "Marque de céréales incroyable ", theme: "nourriture" },
  { leftExtreme: "Biscuit sec et étouffant", rightExtreme: "Meilleur gâteau industriel", theme: "nourriture" },
  { leftExtreme: "Boisson énergisante chimique", rightExtreme: "Meilleur soda", theme: "nourriture" },
  { leftExtreme: "Pire barre chocolatée ", rightExtreme: "Meilleure barre chocolatée ", theme: "nourriture" },
  { leftExtreme: "Plat végétarien triste", rightExtreme: "Meilleure viande", theme: "nourriture" },
];

export const LOCAL_THEMES = [
  { id: "classique", name: "Classique", description: "Opposés classiques" },
  { id: "sport", name: "Sport", description: "Foot, tennis & cie" },
  { id: "jeuvideo", name: "Jeu vidéo", description: "Titres, consoles, persos" },
  { id: "musique", name: "Musique", description: "Chansons, artistes, genres" },
  { id: "nourriture", name: "Nourriture", description: "Tout ce qui se mange" },
  { id: "cinema", name: "Cinéma", description: "Films, séries, réalisateurs" },
  { id: "tous", name: "Tous", description: "Toutes les catégories" },
]

export function getRandomCard(theme: string): LocalCard {
  const cards = theme === "tous" ? LOCAL_CARDS : LOCAL_CARDS.filter((card) => card.theme === theme)

  return cards[Math.floor(Math.random() * cards.length)]
}
