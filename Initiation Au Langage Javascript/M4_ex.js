// Ecrivez une fonction qui affichera "Bonjour le monde" dans votre document.

// function bonjour() {
// 	document.writeln("Bonjour le monde");
// }

/////////////////////////////////////////////////////////////////////////////////

//Écrivez une fonction qui prend en paramètre le prénom de l'utilisateur et qui affichera "Bienvenue à toi [nom de l'utilisateur]"

function bienvenue(nom) {
	document.writeln("Bienvenue à toi " + nom+ "!"); 
}
prenom = Prompt("Quel est votre prénom ? "); 
bienvenue(prenom); 

/////////////////////////////////////////////////////////////////////////////////

/*
Créez une fonction qui accepte deux nombres en paramètre.
Cette fonction va additionner les deux nombres et retourner le résultat.

Affichez les deux nombres ainsi que le résultat de l'opération dans votre document.

*/

function additionner(a, b) {
	return a + b; // Retourne la somme de a et b
}
function generateRandomNumber() {
	// Génère un nombre aléatoire entre 0 et 1000
	return Math.floor(Math.random() * 1001); // Math.floor arrondit à l'entier inférieur
}
const numberOne = generateRandomNumber()
const numberTwo = generateRandomNumber()

additionner(numberOne, numberTwo); // Appelle la fonction additionner avec les deux nombres aléatoires

///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Demandez à l'utilisateur d'entrer une phrase dans son navigateur au moyen d'un prompt()

Écrivez une fonction qui prendra en paramètre la phrase de l'utilisateur et qui aura pour travail de 
remplacer tous les caractères "e", "é",  "è", "ê" qu'ils soient majuscule ou minuscule 
par une astérisque "*"

*/

function remplacerE(phrase) {
	return phrase.replace(/e|é|è|ê/gi, "*"); // Remplace tous les "e", "é", "è", "ê" par "*"
}

phrase = prompt("Entrez une phrase : "); // Demander une phrase à l'utilisateur
phrase = remplacerE(phrase); // Appelle la fonction pour remplacer les caractères
document.writeln(phrase); // Affiche la phrase modifiée dans le document

















