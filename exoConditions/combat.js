class Personnage{
    constructor(pseudo, classe, sante, attaque, niveau=1){
    this.pseudo = pseudo;
    this.classe = classe;
    this.sante = sante;
    this.attaque = attaque;
    this.niveau = niveau;
    }
    evoluer(){
        this.niveau++;
        console.log(this.pseudo + " passe au niveau " + this.niveau);
    }
    verifierSante(){
        if (this.sante > 0 ){
            return this.pseudo + " a " + this.sante + " points de santé"; 
        }else if (this.sante <= 0){ 
            return this.pseudo + " a perdu et il est allé rejoindre les anges!! ";
        };
    }
    informations(){
        console.log(this.pseudo + " le puissant " + this.classe + " a " + this.sante + " points de vie et au niveau " + this.niveau);
    }
};
class Magicien extends Personnage{
    constructor(pseudo,classe,sante,attaque,niveau){
        super(pseudo,"Magicien",170,90,niveau);   
    }
    attaquer(ennemi){
        console.log(ennemi.sante -= this.attaque);
        ennemi.sante -= this.attaque;
        this.evoluer();
        this.verifierSante();
        console.log(ennemi.verifierSante());
        console.log(this.sante);
        
    }
    coupSpecial(ennemi){
        console.log(ennemi.sante);
        ennemi.sante -= this.attaque*5;
        this.evoluer();
        this.verifierSante();
        console.log(this.pseudo + " attaque avec son coup spécial puissance des arcanes " + this.attaque*5 + " points de dégats ")
        console.log(ennemi.verifierSante());
        console.log("La vie de " + this.pseudo + " reste à " + this.sante + " points de vie ");
    }
};

class Guerrier extends Personnage{
    constructor(pseudo,classe,sante,attaque,niveau){
        super(pseudo,"Guerrier",350,50,niveau);
    }
    attaquer(ennemi){
        console.log(ennemi.sante -= this.attaque);
        ennemi.sante -= this.attaque;
        this.evoluer();
        this.verifierSante();
        console.log(ennemi.verifierSante());
        console.log(ennemi.sante);
        
    }
    coupSpecial(ennemi){
        console.log(ennemi.sante);
        ennemi.sante -= this.attaque*5;
        this.evoluer();
        this.verifierSante();
        console.log(this.pseudo + " attaque avec son coup spécial haches de guerre " + this.attaque*5 + " points de dégats ")
        console.log(ennemi.verifierSante());
        console.log("La vie de " + this.pseudo + " reste à " + this.sante + " points de vie ");
    }

};
    

let gandalf = new Magicien("Gandalf");
let aragorn = new Guerrier("Aragorn");

