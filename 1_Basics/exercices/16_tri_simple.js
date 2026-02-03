// Inventaire de la boutique (non trié)
const inventaire = [
  { nom: "Potion de force", prix: 60, stock: 3 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion d'endurance", prix: 40, stock: 7 }
];

// Tri simple

for (let i = 0; i < inventaire.length - 1; i++) {
  for (let j = 0; j < inventaire.length - i - 1; j++) {

    if (inventaire[j].prix > inventaire[j + 1].prix) {

      let temp = inventaire[j];
      inventaire[j] = inventaire[j + 1];
      inventaire[j + 1] = temp;

    }
  }
}

console.log(inventaire)

