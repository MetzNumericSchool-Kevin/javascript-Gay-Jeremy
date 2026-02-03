// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 40, stock: 5 },
  { nom: "Potion de mana", prix: 20, stock: 3 },
  { nom: "Potion d'endurance", prix: 30, stock: 2 }
];

// Bourse de l'aventurier
let bourse_aventurier = 100;


// Mini-simulation d'achat
let message = "Quelle potion souhaitez-vous acheter : \n"
let i = 0
let stock_restant = 0
let total_price = 0
let qte = 0
let reponse_qte = 0
const money = "🪙"

for(let potion of inventaire) {
  message += (` ${i}. ${potion.nom}  |  prix : ${potion.prix}  ;  stock : ${potion.stock}\n`)
  i += 1
}

result = prompt(message)

let reponse_choix = parseInt(result)

if (Number.isNaN(reponse_choix)) {
    console.log("Saisie invalide !")

  } else {

    if (reponse_choix in inventaire) {
      qte = prompt(`Quelle quantité désirez-vous ?`)
      reponse_qte = parseInt(qte)

      if (Number.isNaN(reponse_qte)) {
        console.log("Saisie Invalide")

      } else {
        stock_restant = inventaire[reponse_choix].stock - reponse_qte
        total_price = reponse_qte * inventaire[reponse_choix].prix
      }
    }
  }


let nouvel_bourse = 0

if (stock_restant < 0) {
    console.log("La quantité en stock n'est pas suffisante");

} else if (stock_restant >= 0) {

    console.log(`Le tarif est de ${total_price}${money}`);
        nouvel_bourse = bourse_aventurier - total_price

    if (nouvel_bourse < 0) {
        console.log(`Votre bourse n'est pas assez remplie pour acheter ${qte} potions`)

        } else {
                nouvel_bourse = bourse_aventurier - total_price
                let new_stock_potion = inventaire[reponse_choix].stock - reponse_qte
                inventaire[reponse_choix].stock = new_stock_potion
                console.log(`le stock restant de ${inventaire[reponse_choix].nom} est de ${inventaire[reponse_choix].stock}` )

            console.log(`Il vous reste ${nouvel_bourse}${money} dans votre bourse`)
        }
}