// Pour voir si tout vas bien jusque ici nous allons créer un calculateur en boite de dialogue
// (une sorte de calculatrice simplifiée).
// Objectif :
// - Demandez de faire un choix entre addition – soustraction – multiplication – division
// - Indice : pour un retour à la ligne « \n » tant que l’utilisateur ne choisis pas une des quatre
// proposition il serait bien de répéter la question.
// - Demandez de rentrer un nombre, puis un deuxieme
// - Indice : Répéter la demande si un nombre n’est pas rentré, je vous laisse chercher la
// fonction qui permet de checker cela.
// - Crée 4 fonctions correspond aux 4 méthodes de calculs
// - Selon le choix de l’utilisateur appelé la fonction correspondante
// - Affichez le résultat isNaN
// - Proposez à l’utilisateur de recommencer \n\n

alert("Bienvenue sur ma calculatrice simplifiée");

function choix(){

    var choix = prompt("1-Addition \n 2-Soustraction \n 3-Multiplication \n 4-Division");
    var a ;
    var b ;

    console.log(choix);
    console.log(typeof choix);
    choix = +choix;

    if (choix === 1 || choix === 2 || choix === 3 || choix === 4) {
        return choix;
      } else {
        throw new Error("Recommences!!");
      }
}
function addition(){
    return a+b;
}
function soustraction(){
    return a-b;
}
function multiplication(){
    return a*b;
}
function division(){
    return a/b;
}
