use cinema;

// compter le nombre de document
db.movies.countDocuments();

// ne récupere que le titre (et l'id)
db.movies.find({}, {title: 1});

// ne récupere que le titre
db.movies.find({}, {"_id":0, title: 1});

// récupere tout sauf le titre
db.movies.find({}, {title: 0}) 

// les titres de film qui sont sortis en 1960
db.movies.find({
    year: 1960
}, {title: 1});

// uniquement 10 résultats
db.movies.find().limit(10);

// 10 plus vieux film
db.movies.find({}, // filtrage
{ // projection
    year: 1,
    title: 1
}).sort({ // tri
    //year: 1 // tri ascendant
    year : -1 // tri descendant
}
).limit(10);

// 10 suivant plus vieux film
db.movies.find({}, // filtrage
{ // projection
    year: 1,
    title: 1
}).sort({ // tri
    //year: 1 // tri ascendant
    year : -1 // tri descendant
}
).limit(10)
.skip(10);

const projection = {
    title: 1,
    actors: 1,
    year: 1
}

/* COMPARAISONS */
// EGALITE
db.movies.find(
    {
        year: 1994 // les films de 1994
    },
    projection
);

// PLUS GRAND QUE
db.movies.find(
    {
        year: {
            $gt: 2000 // film apres 2000
        }
    },
    projection
);

// PLUS PETIT QUE
db.movies.find(
    {
        year: {
            $lt: 2000 // film avant 2000
        }
    },
    projection
);

// FILM ENTRE 2 ANNEE
db.movies.find(
    {
        year: {
            $gt: 2000, // film apres 2000
            $lt: 2010 // film avant 2010
        }
    },
    projection
);

// FILM ENTRE 2 ANNEE (avec $and)
db.movies.find(
    {
        $and : [
            {
                year: {
                    $gt: 2000
                }
            },
            {
                year: {
                    $lt: 2010
                }
            }
        ]
    },
    projection
);

// REGEX
db.movies.find(
    {
        title: /avenger/i
    },
    projection
);

// not null
db.actors.find(
    {
       alternative_name: {
           $ne : null
       }
    },
    {
      name: 1,  
    }
);
