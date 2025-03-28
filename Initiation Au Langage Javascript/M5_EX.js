

let page_title = document.getElementsByTagName("h1")[0];


function modifyInnerText(element, Text) {
    element.innerText = Text;
               }


modifyInnerText(page_title, "Ceci est le titre de ma page !");

////////////////////////////////////////////////////////////
/*
Exercice 2

Créez un formulaire dans lequel vous demandez le nom, 
le prénom et l'adresse email de l'utilisateur.

Je vous fournis la base du code. 
Cette base de code vous permet de lancer la fonction 
"traiterFormulaire" en cliquant sur le bouton.

Lors du clique sur le bouton, récupérez toutes 
les informations du formulaire et 
affichez-les dans le document au format suivant :

Nom encodé :
Prénom encodé :
Email encodée :

*/
function getnameFromForm() {
    // Récupère le formulaire
    let form = document.monForm;

    // Récupère les champs du formulaire
    let name_field = form.nom;
    let surname_field = form.prenom;
    let email_field = form.email;

    // Récupère les valeurs des champs
    let name_response = name_field.value;
    let surname_response = surname_field.value;
    let email_response = email_field.value;

    return name_response, surname_response, email_response
}

function traiterFormulaire(){
    
    
    name_response, surname_response, email_response = getnameFromForm()
    // Affiche les valeurs dans la console (par exemple)
    console.log("Nom : " + name_response);
    console.log("Prénom : " + surname_response);
    console.log("Email : " + email_response);
}


/*
Exercice 3

Dans le document suivant, écrivez un code qui remplacera la couleur de fond des blocs 1, 3 et 5 
par la couleur de votre choix (pas de rouge)

Vous pouvez facilement faire ce traitement en utilisant la propriété style de votre élément 
+ la propriété CSS que vous souhaitez modifier.

Ex: [Votre element].style.backgroundColor = 'green';

Vous trouverez la majorité des propriétés CSS telles qu'elles sont utilisées 
en JavaScript en suivant le lien : https://www.w3schools.com/jsref/dom_obj_style.asp(opens in a new tab)


*/

<!DOCTYPE html>
<html>
  <head>
    <title>Exercice Javascript</title>
    <style>
      div {
        margin: 10px;
        width: 90px;
        height: 50px;
        background: red;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>
  </head>
  <body>
    <div>Bloc 1</div>
    <div>Bloc 2</div>
    <div>Bloc 3</div>
    <div>Bloc 4</div>
    <div>Bloc 5</div>
    
    <script>
      let divisions = document.getElementsByTagName("div");

      // Modifier la couleur de fond pour les blocs 1, 3 et 5
      divisions[0].style.backgroundColor = "blue";  // Bloc 1
      divisions[2].style.backgroundColor = "green"; // Bloc 3
      divisions[4].style.backgroundColor = "yellow"; // Bloc 5
    </script>
  </body>
</html>

document.querySelectorAll("button")

/*




Exercice 4

Créez un formulaire qui comprend deux inputs. 
Lors du clic sur le bouton du formulaire, une fonction s'exécutera. 

Cette fonction aura pour objectif de :

récupérer la valeur des deux inputs
additionner ces deux valeurs
mettre le résultat  dans un élément span (préalablement créé en HTML) 
de votre document OU erreur si le calcule n'est pas possible
Je vous fournis la même base que pour l'exercice 2

Attention à valider les valeurs de vos inputs avec Number, parseInt ou parseFloat
La fonction isNaN() permet de savoir si une variable est numérique ou non (isNaN <=> is Not a Number)


CONTINUE
Completed
Completed
Completed
33% Completed


*/ 
const
