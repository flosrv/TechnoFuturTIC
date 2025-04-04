let limit_iterations = 1000; // nombre d'itérations maximum
let ten_hit_list = [];   // tableau vide pour stocker les résultats
let hundred_hit_list = [];
let let_thousands_hit_list = [];
let let_ten_thousands_hit_list = [];

let i = 1; // initialisation de la variable i à 1

for (let i = 0; i < limit_iterations; i++) {
    let item = i * 2;
    ten_hit_list.push(item); // Ajoute item à ten_hit_list

    if (i % 10 === 0 && ten_hit_list.length > 0) {
        // Tous les 10 itérations, ajoute ten_hit_list à hundred_hit_list
        hundred_hit_list.push([...ten_hit_list]); // Ajoute une copie de ten_hit_list
        console.log("Hundred Hit List (after 10 iterations):", hundred_hit_list); // Affiche hundred_hit_list
        ten_hit_list = []; // réinitialisation de ten_hit_list
    }

    if (i % 100 === 0 && hundred_hit_list.length > 0) {
        // Tous les 100 itérations, ajoute hundred_hit_list à let_thousands_hit_list
        let_thousands_hit_list.push([...hundred_hit_list]); // Ajoute une copie de hundred_hit_list
        console.log("Thousands Hit List (after 100 iterations):", let_thousands_hit_list); // Affiche let_thousands_hit_list
        hundred_hit_list = []; // réinitialisation de hundred_hit_list
    }

    if (i % 1000 === 0 && let_thousands_hit_list.length > 0) {
        // Tous les 1000 itérations, ajoute let_thousands_hit_list à let_ten_thousands_hit_list
        let_ten_thousands_hit_list.push([...let_thousands_hit_list]); // Ajoute une copie de let_thousands_hit_list
        console.log("Ten Thousands Hit List (after 1000 iterations):", let_ten_thousands_hit_list); // Affiche let_ten_thousands_hit_list
        let_thousands_hit_list = []; // réinitialisation de let_thousands_hit_list
    }
}
