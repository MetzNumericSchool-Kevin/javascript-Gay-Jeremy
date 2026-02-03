// Recherche dans l'inventaire

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 20, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
];

let max_prix = 0
let max_stock = 0
let cpt = 0

for (let potion of inventaire) {

  if (max_prix < potion.prix) {
    max_prix = potion.prix
    potion_max_prix = potion.nom
  }

  if (max_stock < potion.stock) {
    max_stock = potion.stock
    potion_max_stock = potion.nom
    }

  if (potion.stock > 0) {
    cpt += 1
  }
  
}

console.log(potion_max_prix)
console.log(potion_max_stock)
console.log(cpt)