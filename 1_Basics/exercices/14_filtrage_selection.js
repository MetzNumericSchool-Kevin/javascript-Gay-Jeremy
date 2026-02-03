// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de vitesse", prix: 35, stock: 8 }
];

// Filtrage et sélection
let potions_en_stock = []
let potions_abordables = []
let i = 0

for (let potion of inventaire) {

  if (potion.stock > 0) {
    potions_en_stock.push(inventaire[i])
  }

  if (potion.prix < 40) {
    potions_abordables.push(inventaire[i])
  }

  i += 1
  
}

console.log(`Il y a ${potions_en_stock.length} potions dont le stock est supérieur à 0`)
console.log(`Il y a ${potions_abordables.length} potions dont le tarif est inférieur à 40`)
console.log(potions_en_stock)
console.log(potions_abordables)