/*Commencez par lui demandez (au moyen d'un prompt) combien de lignes il souhaite afficher.  
Ensuite, et au moyen d'une boucle for, faites en sorte d'obtenir le résultat suivant dans votre document :
*/

let number_of_lines = parseInt(prompt("Combien de lignes souhaitez-vous afficher ?").replace(/[^0-9]/g, '')); // Demander le nombre de lignes, uniquement les chiffres

for (let i = 1; i <= number_of_lines; i++) { // Boucle pour chaque ligne
    document.writeln("<br>"); // Afficher une nouvelle ligne
    document.writeln("*".repeat(i)); // Afficher i étoiles
}
