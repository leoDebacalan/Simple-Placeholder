/* 
Activité : gestion des contacts
*/

class Contact {
    constructor(nom, prenom){
        this.nom = nom;
        this.prenom = prenom;
    }
    
    afficher(){
        console.log(`Nom : ${this.nom}, prénom : ${this.prenom}`);
    }
}

let tabConctacts = [
    new Contact("Lévisse", "Carole"),
    new Contact("Nelsonne", "Mélodie")
]

function afficherOptions(){
    
    console.log("\n1 : Lister les contacts");
    console.log("2 : Ajouter un contact");
    console.log("0 : Quitter");
}

function listerContacts(){
    for(Contact of tabConctacts){
        Contact.afficher();
    }
}

function ajouterContact(){
    let nom = prompt("Entrez le nom du nouveau contact");
    let prenom = prompt("Entrez le prénom du nouveau contact");
    const nouveauContact = new Contact(nom  , prenom);
    tabConctacts.push(nouveauContact);
}

function quitter(){
    continuer = false;
    console.log("Au revoir !");
}

function main(){
    let continuer = true;
    console.log("Bienvenu.e dans le gestionnaire des contacts");
    while(continuer){
        afficherOptions();
        let input = prompt("Choisissez une option");
        switch(input){
            case "1" :
                listerContacts();
                break;
            case "2" :
                ajouterContact();
                break;
            case "0" :
                quitter();
                break;
        }
    }
}
main();