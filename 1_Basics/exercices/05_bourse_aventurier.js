// Variables des exercices précédents (modifie selon tes valeurs)
let stock_potion_soin = 10;
let price_potion_care = 2;
const money = "🪙"

// Bourse de l'Aventurier 💰
let Adventurer_Purse = 50;
let result = prompt("Quelle quantité de potion de soin désirez-vous ? ")
let qte = parseInt(result)

if (Number.isNaN(qte)) {
    console.log("Quantité Invalide !")
} else {
    var remaining_stock = stock_potion_soin - qte
    var total_price = qte * price_potion_care
}

if (remaining_stock < 0) {
    console.log("La quantité en stock n'est pas suffisante");
} else if (remaining_stock >= 0) {
    console.log(`Le tarif est de ${total_price}${money}`);
    var new_Adventurer_Purse = Adventurer_Purse - total_price
    if (new_Adventurer_Purse < 0) {
        console.log(`Votre bourse n'est pas assez remplie pour acheter ${qte} potions`)
        } else {
            let new_Adventurer_Purse = Adventurer_Purse - total_price
            console.log(`Il vous reste ${new_Adventurer_Purse}${money} dans votre bourse`)
        }
}



