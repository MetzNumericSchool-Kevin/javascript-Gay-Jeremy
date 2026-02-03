// Variable de l'exercice précédent (modifie selon tes valeurs)
const inventaire = [];

const potion_soin = {
    nom: "Potion de soin",
    prix: 50,
    stock: 10,
}

const potion_mana = {
    nom:"Potion de mana",
    prix:100,
    stock:3
}

const potion_endurance = {
    nom:"Potion d'endurance",
    prix:20,
    stock:10
}

// Aventurier, regarde tout ce que je vends !
inventaire.push(potion_soin,potion_mana,potion_endurance)
console.log(inventaire)

for (let potion of inventaire) {
    console.log(`Nom : ${potion.nom}
Prix : ${potion.prix}
Stock : ${potion.stock}`
)
}

for (let potion of inventaire) {
    for (const [key, value] of Object.entries(potion)) {
        console.log(`${key}: ${value}`);
    }
}