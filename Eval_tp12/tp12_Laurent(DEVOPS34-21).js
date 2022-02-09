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


// choisir un opérateur
//verif
do{
    var chooseOperator;

    var flag = true;

    while(flag == true){
        chooseOperator = prompt("1-Addition \n 2-Soustraction \n 3-Multiplication \n 4-Division");
        chooseOperator = +chooseOperator;
        if (chooseOperator === 1 || chooseOperator === 2 || chooseOperator === 3 || chooseOperator === 4) {
            flag = false;
            
            }else{
                flag = true;
            }
        }
        flag = true;
    try{
        while(flag == true){
            var chiffre1=parseInt(prompt('Choisissez un nombre :'));
            var chiffre2=parseInt(prompt('Choisissez un deuxième nombre :'));

            if(isNaN(chiffre1) || isNaN(chiffre2)){
                flag= true;
            }else{
                flag = false;
                switch(chooseOperator){
                    case 1 :
                        alert(addition(chiffre1, chiffre2));
                    break;
                    case 2 :
                        alert(soustraction(chiffre1, chiffre2));
                    break;
                    case 3 :
                        alert(multiplication(chiffre1, chiffre2));
                    break;
                    case 4 :
                        alert(division(chiffre1, chiffre2));    
                    break;
                    default :
                    break;
                    }
            }
        }
    }catch(e){
        alert(e);
    }
    // fonction de calcul
    function addition(a,b){
        return a+b;
    }
    function soustraction(a,b){
        return a-b;
    }
    function multiplication(a,b){
        return a*b;
    }
    function division(a,b){
        return a/b;
    } 
fin = confirm("Voulez-vous continuer?");

}while(fin == true);