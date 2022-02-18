// Etape 1 - Sélectionner nos éléments
// Etape 2 - Cacher l'erreur
// Pour ceux qui ne sont pas familiers avec ce jeu, il s'agit de
// deviner le prix d'un produit. Ici, trois possibilités :
// - C'est plus cher
// - C'est moins cher
// - C'est le juste prix !
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
// Dans cette version du "Juste prix", nous générerons un
// Etape 5 - Agir à l'envoi du formulaire
// prix aléatoire, et nous calculerons le nombre de coups
// qu'il faut à un joueur pour retrouver le juste prix.
// Etape 6 - Créer la fonction vérifier
// Ainsi, il pourra se confronter à ses amis pour tenter de
// voir qui retrouve le bon prix avec le moins de coups
// possibles !
// Je vous attends dans la prochaine session !

let btnSelector = document.querySelector(".startButton");
let randomQuote = Math.floor(Math.random() * 1000); 
console.log(randomQuote);
let inputUser = document.getElementById("in");
let affichage = document.querySelector(".p1");
let counter = 1;

btnSelector.addEventListener("click", messageArray);


function messageArray(){
    
    let newValue = inputUser.value;
    if(newValue > 1000 || newValue < 0){
        affichage.textContent = "Entrez un nombre valable!";
    }
    else{
        if(newValue < randomQuote){
            affichage.textContent = "C'est plus Haut! Essayez Encore!" + counter + "ème tentative";
            counter = counter+1;
        }
        else if(newValue > randomQuote){
            affichage.textContent = "C'est plus Bas! Essayez Encore!" + counter + "ème tentative";
            counter = counter+1;
        }
        else {
            affichage.textContent = "Vous avez trouvé! C'est Gagné!" + counter + "ème tentative";
        }
    }
 
};





