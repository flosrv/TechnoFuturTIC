// 1. créer une collection qui contiendra des couleurs
// une couleur est composée de 4 propriétés (r,g,b) requise
// et a (alpha) non requises
// Les valeurs seront comprises entre 0 et 255 pour r,g et b
// et entre 0 et 1 pour a

// correct
db.couleurs.insertOne({ r: 255, g: 255, b: 0, a: 0.35 });
db.couleurs.insertOne({ r: 251, g: 100, b: 17 });
db.couleurs.insertOne({ r: 100, g: 120, b: 17, a: 0 });

// fail
db.couleurs.insertOne({ r: 251, g: 100, b: -45, a: 1 });
db.couleurs.insertOne({ r: 251, g: 100, b: 17, a: 1.7 });

// 2. créer une collection contenant des personnes
// nom: string,
// prenom: string,
// dateDeNaissance: date,
// adresse: {
//   rue: string,
//   numero: string,
//   ville: string,
//   pays: {
//     nom: string,
//     codeIso: string (length 2),
//   }
// },
// compétences: string[] (max 10),
// titre: 'Melle'|'Mme'|'Mr',
