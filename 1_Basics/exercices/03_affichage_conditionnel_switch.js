// Variables des exercices précédents (modifie selon tes valeurs)
const money = "🪙"
const name_store = "Potion store";
const name_sorcier = "Archibald";
let stock_potion_care = 10;
let price_potion_care = 2;

// Affichage conditionnel avec switch

let result = prompt(
    `Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔

    - 1. Le nom de la boutique
    - 2. Le nom du Sorcier
    - 3. Le prix d'un potion de soin
    - 4. La quantité d'une potion de soin`)

console.log(result)
switch(result) {
    case ("1") :
        console.log(`Le nom de la boutique est : ${name_store}.`)
        break
    case ("2") :
        console.log(`Le nom du sorcier est : ${name_sorcier}`)
        break
    case ("3") :
        console.log(`Le stock de potion de type soin est de : ${stock_potion_care} potions`)
        break
    case ("4") :
        console.log(`Le prix d'une potion de type soin est de : ${price_potion_care}${money}`)
        break
    default:
    console.log("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕")
}
