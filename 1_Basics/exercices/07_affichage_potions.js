// Variable de l'exercice précédent (modifie selon tes valeurs)
const potions = ["Potion de soin", "Potion de mana", "Potion d'endurance"];

// Affichage des potions

// Première potion
console.log(potions[0])

// Dernière potion
console.log(potions[potions.length - 1])

// Avec boucle for
for (potion of potions) {
    console.log(`Nous avons de la ${potion}`)
}


