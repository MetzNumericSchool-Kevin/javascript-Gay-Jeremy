// Variables des exercices précédents (modifie selon tes valeurs)
let price_potion_care = 2 ;
const money = "🪙"

// Calcul du prix total d'une commande de potion 🪙
let result = prompt("Quelle quantité de potion de soin désirez-vous ? ")
let qte = parseInt(result)

if (Number.isNaN(qte)) {
    console.log("Quantité Invalide !")
} else {
    let total_price = qte * price_potion_care
    console.log(`Le prix de ${qte} potions de soins est de : ${total_price}${money} mon cher Aventurier. 💸`)
}


