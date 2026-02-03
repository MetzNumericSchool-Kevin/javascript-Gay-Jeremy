// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 }, 
  { nom: "Potion d'endurance", prix: 40, stock: 7 }, 
  { nom: "Potion de force", prix: 60, stock: 3 } 
];

// Calculs et statistiques
const money = "🪙"
let value_inventaire = 0
let avg_potion = 0
let value_stock_totale = 0
let total_potion = 0


for (let potion of inventaire) {
  
  value_inventaire = potion.prix * potion.stock
  console.log(`La valeur du stock de ${potion.nom} est de ${value_inventaire}${money}`)
  value_stock_totale += value_inventaire
  total_potion += potion.stock

}

avg_potion = value_stock_totale / total_potion

console.log(`La valeur du stock totale est de ${value_stock_totale}${money}`)
console.log(`Le prix moyen d'une potion est de ${avg_potion}${money}`)