let temperature = prompt("Quelle est la température dans votre pièce ?").replace(/[^0-9.,-]/g, ''); // Demander la température et nettoyer l'entrée
temperature = parseFloat(temperature); // Convertir la chaîne de caractère en un nombre flottant

let message = ""; // Initialiser une variable pour stocker le message

// Vérification des intervalles de température
if (temperature < 0) {
    message = "Brrrrr on va mourir gelé!";
} else if (temperature >= 0 && temperature <= 12) {
    message = "Fichtre! Il fait un peu frisquet ici!";
} else if (temperature >= 13 && temperature <= 22) {
    message = "Il fait plutôt doux chez vous!";
} else if (temperature >= 23 && temperature <= 35) {
    message = "Viens danseeer, sous les sunlights des tropiiiques!";
} else {
    message = "Mon dieu, on est cuit comme des couques!";
}

alert(message); // Afficher le message
