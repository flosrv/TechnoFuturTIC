// créer une collection qui contiendra des couleurs
// une couleur est composée de 4 propriétés (r,g,b) requise
// et a (alpha) non requises
// Les valeurs seront comprises entre 0 et 255 pour r,g et b
// et entre 0 et 1 pour a

const colorSchema = {
  bsonType: "int",
  minimum: 0,
  maximum: 255,
};

db.createCollection("couleurs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["r", "g", "b"],
      properties: {
        r: colorSchema,
        g: colorSchema,
        b: colorSchema,
        a: {
          bsonType: "number",
          minimum: 0,
          maximum: 1,
        },
      },
    },
  },
});

db.couleurs.insertOne({ r: 251, g: 100, b: -45, a: 1 });

// correct
db.couleurs.insertOne({ r: 255, g: 255, b: 0, a: 0.35 });
db.couleurs.insertOne({ r: 251, g: 100, b: 17 });
db.couleurs.insertOne({ r: 100, g: 120, b: 17, a: 0 });

// fail
db.couleurs.insertOne({ r: 251, g: 100, b: -45, a: 1 });
db.couleurs.insertOne({ r: 251, g: 100, b: 17, a: 1.7 });

// créer une collection contenant des personnes
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

const stringSchema = {
  bsonType: "string",
};
const dateSchema = {
  bsonbsonType: "date",
};

const paysSchema = {
  bsonType: "object",
  required: ["nom", "codeIso"],
  properties: {
    nom: stringSchema,
    codeIso: {
      bsonType: "string",
      minLength: 2,
      maxLength: 2,
    },
  },
};

const adresseSchema = {
  bsonType: "object",
  required: ["rue", "numero", "ville", "pays"],
  properties: {
    rue: stringSchema,
    numero: stringSchema,
    ville: stringSchema,
    pays: paysSchema,
  },
};

const personneSchema = {
  bsonType: "object",
  required: [
    "nom",
    "prenom",
    "dateDeNaissance",
    "adresse",
    "competences",
    "titre",
  ],
  properties: {
    nom: stringSchema,
    prenom: stringSchema,
    dateDeNaissance: dateSchema,
    adresse: adresseSchema,
    competence: {
      bsonType: "array",
      items: {
        bsonType: "string",
      },
      maxItems: 10,
      uniqueItems: true,
    },
    titre: {
      bsonType: "string",
      enum: ["Melle", "Mme", "Mr"],
    },
  },
};

db.createCollection("personnes", {
  validator: {
    $jsonSchema: personneSchema,
  },
});
