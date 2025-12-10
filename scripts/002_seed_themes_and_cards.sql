-- Seed initial themes and cards in French

-- Thème: Général
INSERT INTO themes (id, name, description) VALUES 
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Général', 'Questions variées pour tout le monde'),
  ('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Nourriture', 'Tout sur la gastronomie'),
  ('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Culture Pop', 'Films, séries, musique et célébrités'),
  ('d4e5f6a7-b8c9-0123-defa-234567890123', 'Vie Quotidienne', 'Situations du quotidien');

-- Cartes pour le thème Général
INSERT INTO cards (theme_id, left_extreme, right_extreme) VALUES
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Très froid', 'Très chaud'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Complètement normal', 'Très bizarre'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Pas du tout effrayant', 'Terrifiant'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Très ennuyeux', 'Passionnant'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Très facile', 'Très difficile'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Minuscule', 'Gigantesque'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Très lent', 'Ultra rapide'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Totalement inutile', 'Indispensable'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Pas cher du tout', 'Hors de prix'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Très ancien', 'Ultra moderne'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Mauvaise idée', 'Excellente idée'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Pas du tout populaire', 'Extrêmement populaire'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Très dangereux', 'Parfaitement sûr'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Très bruyant', 'Silencieux'),
  ('a1b2c3d4-e5f6-7890-abcd-ef1234567890', 'Mauvais pour la santé', 'Bon pour la santé');

-- Cartes pour le thème Nourriture
INSERT INTO cards (theme_id, left_extreme, right_extreme) VALUES
  ('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Dégoûtant', 'Délicieux'),
  ('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Très sucré', 'Très salé'),
  ('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Fast food', 'Gastronomie'),
  ('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Petit-déjeuner', 'Dîner'),
  ('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Nourriture de rue', 'Restaurant étoilé'),
  ('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Très épicé', 'Pas épicé du tout'),
  ('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Manger seul', 'Manger en groupe'),
  ('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Cuisine maison', 'Livraison'),
  ('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Végétarien', 'Carnivore'),
  ('b2c3d4e5-f6a7-8901-bcde-f12345678901', 'Dessert', 'Plat principal');

-- Cartes pour le thème Culture Pop
INSERT INTO cards (theme_id, left_extreme, right_extreme) VALUES
  ('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Sous-estimé', 'Surestimé'),
  ('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Classique intemporel', 'Mode passagère'),
  ('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Pour enfants', 'Pour adultes'),
  ('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Héros', 'Méchant'),
  ('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Comédie', 'Drame'),
  ('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Film culte', 'Film oublié'),
  ('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Musique de fond', 'Concert live'),
  ('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Années 80', 'Années 2020'),
  ('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Solo', 'Groupe'),
  ('c3d4e5f6-a7b8-9012-cdef-123456789012', 'Blockbuster', 'Film indépendant');

-- Cartes pour le thème Vie Quotidienne
INSERT INTO cards (theme_id, left_extreme, right_extreme) VALUES
  ('d4e5f6a7-b8c9-0123-defa-234567890123', 'Habitude normale', 'Habitude bizarre'),
  ('d4e5f6a7-b8c9-0123-defa-234567890123', 'Du matin', 'Du soir'),
  ('d4e5f6a7-b8c9-0123-defa-234567890123', 'Introverti', 'Extraverti'),
  ('d4e5f6a7-b8c9-0123-defa-234567890123', 'Relaxant', 'Stressant'),
  ('d4e5f6a7-b8c9-0123-defa-234567890123', 'Productif', 'Procrastination'),
  ('d4e5f6a7-b8c9-0123-defa-234567890123', 'Travail', 'Loisir'),
  ('d4e5f6a7-b8c9-0123-defa-234567890123', 'Été', 'Hiver'),
  ('d4e5f6a7-b8c9-0123-defa-234567890123', 'Ville', 'Campagne'),
  ('d4e5f6a7-b8c9-0123-defa-234567890123', 'Réunion nécessaire', 'Réunion inutile'),
  ('d4e5f6a7-b8c9-0123-defa-234567890123', 'Acceptable en public', 'Inacceptable en public');
