let limit = 50; // nombre maximum
let odd_numbers = []; // tableau vide pour stocker les nombres impairs

let i = 1; // initialisation de la variable i à 1

while (i <= limit) {
    if (i % 2 !== 0) {
        odd_numbers.push(i); // Ajoute i à odd_numbers si impair
        document.writeln(i + "<br>"); // Affiche i dans le document
    }
    i++; // incrémentation de i
}

// Affiche le tableau des nombres impairs   
document.writeln("Nombres impairs: " + odd_numbers.join(", ")); // Affiche le tableau des nombres impairs
jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
length(jours); // Affiche la longueur du tableau
jours.length
//Ecrivez une boucle qui affichera, dans le document, chaque entrée du tableau "jours" précédemment créé.

for (let i = 0; i < jours.length; i++) {
    document.writeln(jours[i] + "<br>"); // Affiche chaque jour dans le document
}