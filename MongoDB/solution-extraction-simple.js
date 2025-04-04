// 1. récupérer les 10 premiers films triés par ordre décroissant
// sur le score

db.movies.find({}, { title: 1, score: 1 }).sort({ score: -1 }).limit(10);

// 1.1 récupérer les 10 suivants
db.movies
  .find({}, { title: 1, score: 1 })
  .sort({ score: -1 })
  .limit(10)
  .skip(10);

// 2. récupérer le titre, le rating de tous les films
// qui ont un rating égal à 3

db.movies.find(
  {
    rating: 3,
  },
  { title: 1, rating: 1 }
);

// avec $eq
db.movies.find(
  {
    rating: {
      $eq: 3,
    },
  },
  { title: 1, rating: 1 }
);

// 3. récupérer le titre, l'année de tous les films qui sont sortis
// dans les années 90 (de 1990 à 1999)
db.movies.find(
  {
    year: {
      $gte: 1990,
      $lte: 1999,
    },
  },
  { title: 1, year: 1 }
);

db.movies.find(
  {
    $and: [
      {
        year: {
          $gte: 1990,
        },
      },
      {
        year: {
          $lte: 1999,
        },
      },
    ],
  },
  { title: 1, year: 1 }
);

// 4. récupérer le titre tous les films d'horreur sortis après 2000
db.movies.find(
  {
    // attention case sensitive
    //    genre: 'Horror'
    //        genre: {
    //            $eq: 'Horror'
    //        }

    // non case sensitive
    genre: /horror/i,
  },
  { title: 1, year: 1, genre: 1 }
);

// 5. récupérer le titre des films dans lesquels tom hanks a joué
// triés par année
const projection = { title: 1, year: 1 };
db.movies
  .find(
    {
      actors: /tom hanks/i,
    },
    {
      ...projection, // deconstruction : on extrait toutes les proprietes de l'objet "projection" dans l'objet actuel
      rating: 1,
    }
  )
  .sort({
    year: 1,
  });

// 6. récupérer le titre, le nombre d'acteurs
// des films d'aventure sortis dans les années 2000
// triés par rating
db.movies
  .find(
    {
      year: {
        $gte: 2000,
      },
      genre: /adventure/i,
    },
    {
      title: 1,
      genre: 1,
      nbActors: {
        $size: "$actors",
      },
    }
  )
  .sort({ rating: 1 });

// 7. récupérer le titre, les acteurs des films
// dont le nombre d'acteurs = 5
db.movies.find(
  {
    actors: { $size: 5 },
  },
  {
    title: 1,
    nbActors: {
      $size: "$actors",
    },
  }
);

// 8. récupérer le titre, les acteurs des films
// dont le nombre d'acteurs > 5
db.movies.find(
  {
    //    $where: 'this.actors.length > 5'
    //    'actors.5': {$exists: 1}
    $expr: { $gt: [{ $size: "$actors" }, 5] },
  },
  {
    title: 1,
    nbActors: {
      $size: "$actors",
    },
  }
);

// 9. récupérer le nombre de films d'horreur ou de comédie
db.movies.countDocuments({
  //    genre: {$in: ['Horror', 'Comedy']}
  //    $or: [{ genre: /comedy/i }, { genre: /horror/i }],
  genre: /comedy|horror/i,
});

// .count()
db.movies
  .find({
    genre: { $in: ["Horror", "Comedy"] },
  })
  .count();

// 10. récupérer le nombre films qui contiennent le mot "christmas"
db.movies.countDocuments({
  title: /christmas/i,
});

// 11. récupérer le titre,
// les 5 premiers acteurs (triés par ordre croissant)
// des films sortis dans les années 90
// et dont le genre est "Horror" ou "Comedy"

/* Résultat attendu
{
    "title" : "Titre du film",
    "actors" : [
        "Actor1",
        "Actor2",
        "Actor3",
        "Actor4",
        "Actor5"
    ]
}

...
*/

db.movies.find(
  {
    year: {
      $gte: 1990,
      $lt: 2000,
    },
    genre: { $in: ["Horror", "Comedy"] },
  },
  {
    title: 1,
    actors: {
      $slice: [
        {
          $sortArray: { input: "$actors", sortBy: 1 },
        },
        5,
      ],
    },
  }
);

// BONUS object neste
db.test.insert({
  identifier: {
    prenom: "Philippe",
    nom: "Haerens",
  },
});

db.test.insert({
  identifier: {
    prenom: "Khun",
    nom: "Ly",
  },
});

db.test
  .find(
    {},
    {
      identifier: {
        prenom: 1,
        nom: 1,
      },
    }
  )
  .sort({
    "identifier.nom": 1,
  });
