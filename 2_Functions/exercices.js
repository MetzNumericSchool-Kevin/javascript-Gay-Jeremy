// ============================================
// 📦 CONSTANTES DE DÉPART
// ============================================
// Copie ces constantes au début de ton fichier
// Tu les utiliseras dans tous les exercices

const nom_sorcier = "Archibald 🧙‍♂️";

const manuel_de_fabrication = {
  potion_soin: {
    ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
    temps_de_fabrication: 3, // exprimé en secondes
  },
};

const inventaire = [
  {
    id: "potion_soin", // identifiant unique de la potion
    prix: 10,
    stock: 0,
  },
];



// ============================================
// EXERCICE 1 : Salutation Aventurier
// ============================================
// 🎯 Objectif : Créer ta première fonction qui affiche un message personnalisé
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée ta fonction salutations() ci-dessous
function salutations(nom_sorcier) {
  console.log(`Salutations Aventurier ! Je me nomme ${nom_sorcier} pour vous servir.`)
}





// 🧪 TESTS - Décommente pour tester
// console.log("=== EXERCICE 1 ===");
// salutations(nom_sorcier);


// ============================================
// EXERCICE 2 : Quel est le tarif d'une potion ?
// ============================================
// 🎯 Objectif : Créer une fonction qui calcule le prix total d'une commande
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée ta fonction calculerPrixTotal() ci-dessous
function calculerPrixTotal(id_potion,inventaire,quantite) {
  for (let potion of inventaire) {
    if (potion.id === id_potion) {
      return (potion.prix * quantite)
    } else {
      console.log("La potion n'est pas disponible en stock")
    }
  }
}




// 🧪 TESTS - Décommente pour tester
// console.log("=== EXERCICE 2 ===");
// const prix = calculerPrixTotal("potion_soin", inventaire, 3);
// console.log("Prix pour 3 potions:", prix, "🪙");


// ============================================
// EXERCICE 3 : Fabrication de potion
// ============================================
// 🎯 Objectif : Créer une fonction qui fabrique un nouvel objet potion
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée ta fonction fabriquerPotion() ci-dessous

function fabriquerPotion(id,prix=10,stock=1) {
  return {
    id,
    prix,
    stock
  }
}


// 🧪 TESTS - Décommente pour tester
// console.log("=== EXERCICE 3 ===");
// const potion1 = fabriquerPotion("potion_mana", 15, 5);
// console.log(potion1);
// const potion2 = fabriquerPotion("potion_force");
// console.log(potion2);


// ============================================
// EXERCICE 4 : Ajout de nouvelles potions dans l'inventaire
// ============================================
// 🎯 Objectif : Créer une fonction qui ajoute ou met à jour une potion
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée ta fonction ajouterPotion() ci-dessous

function ajouterPotion(inventaire, potion) {
  const item = inventaire.find(p => p.id === potion.id)

  if (item) {
    item.prix = potion.prix
    item.stock += potion.stock

  } else {
    inventaire.push(potion)
  }

  inventaire.sort((item, potion) => potion.prix - item.prix);
  return inventaire
}



// 🧪 TESTS - Décommente pour tester
// console.log("=== EXERCICE 4 ===");

const nouvellePotion = fabriquerPotion("potion_mana", 20, 3);
ajouterPotion(inventaire, nouvellePotion);
const nouvellePotion1 = fabriquerPotion("filtre_amour", 50, 5)
ajouterPotion(inventaire, nouvellePotion1);
console.log("Inventaire après ajout:", inventaire);


// ============================================
// EXERCICE 5 : Cherche moi les potions qui...
// ============================================
// 🎯 Objectif : Créer des fonctions pour filtrer l'inventaire
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée tes fonctions getPotionsEnStock() et getPotionsEnRupture() ci-dessous

function getPotionsEnStock(inventaire) {
  const filtre_inventaire = inventaire.filter((potion) => potion.stock > 0)
  return filtre_inventaire
}

function getPotionsEnRupture(inventaire) {
  const filtre_inventaire = inventaire.filter((potion) => potion.stock == 0)
  return filtre_inventaire
}



// 🧪 TESTS - Décommente pour tester
// console.log("=== EXERCICE 5 ===");
console.log("Inventaire complet:", inventaire);
console.log("Potions en stock:", getPotionsEnStock(inventaire));
console.log("Potions en rupture:", getPotionsEnRupture(inventaire));
console.log("Vérification Inventaire:", inventaire);


// ============================================
// EXERCICE 6 : Allons faire de la cueillette !
// ============================================
// 🎯 Objectif : Améliorer la fonction de fabrication pour vérifier les ingrédients
// 📖 Consignes : Consulte le README pour les détails
// ⚠️ Note : Crée une NOUVELLE fonction avec un nom différent (ex: fabriquerPotionAvecIngredients)

// ✍️ TON CODE ICI
// Crée ta fonction fabriquerPotionAvecIngredients() ci-dessous

function fabriquerPotionAvecIngredients(id,ingredients,prix=10,stock=1) {

  let trouve = false

  for (let potion in manuel_de_fabrication) {
    if (potion === id) {
      trouve = true
      break
    }
  }

  if (!trouve) {
      console.log("La potion n'est pas dans le manuel de fabrication")
  }

  let verif = false

  if (trouve) {
    for (let ingredient of manuel_de_fabrication[id].ingredients) {
      verif = ingredients.find(p => p === ingredient) !== undefined
    }
  }

  if (verif) {
    return {
      id,
      prix,
      stock
    }
  } else {
    return new Error('Il manque des ingrédients à cette potion')
  }
}




// 🧪 TESTS - Décommente pour tester
console.log("=== EXERCICE 6 ===");
// Test avec tous les ingrédients
const resultat1 = fabriquerPotionAvecIngredients(
  "potion_soin",
  ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
  10,
  1
);
if (resultat1 instanceof Error) {
  console.error(resultat1.message);
} else {
  console.log("✅ Potion créée:", resultat1);
  ajouterPotion(inventaire, resultat1);
}

// Test avec ingrédients manquants
const resultat2 = fabriquerPotionAvecIngredients(
  "potion_soin",
  ["eau_de_source"],
  10,
  1
);
if (resultat2 instanceof Error) {
  console.error("❌", resultat2.message);
} else {
  console.log("✅ Potion créée:", resultat2);
}


// ============================================
// EXERCICE 7 : Une potion n'est jamais fabriquée en retard !
// ============================================
// 🎯 Objectif : Découvrir les callbacks et l'asynchrone avec setTimeout
// 📖 Consignes : Consulte le README pour les détails
// ⚠️ Note : Crée une NOUVELLE fonction (ex: fabriquerPotionAvecDelai)

// ✍️ TON CODE ICI
// Crée ta fonction fabriquerPotionAvecDelai() ci-dessous
function fabriquerPotionAvecDelai(id,ingredients,callback,prix=10,stock=1) {
  let trouve = false

  for (let potion in manuel_de_fabrication) {
    if (potion === id) {
      trouve = true
      break
    }
  }

  if (!trouve) {
    return new Error("La potion n'est pas dans le manuel de fabrication")
  }

  let verif = false

  if (trouve) {
    for (let ingredient of manuel_de_fabrication[id].ingredients) {
      verif = !ingredients.find(p => p === ingredient) === undefined
    }
  }

  if (!verif) {
    return new Error('Il manque des ingrédients à cette potion')
  } else {
    const tempsFabrication = manuel_de_fabrication[id].temps_de_fabrication;
    setTimeout(() => {
    // Code à exécuter après le délai
      const potion = { id, prix, stock };
      callback(potion); // On appelle le callback avec la potion
  }, 
  tempsFabrication * 1000); 
  }
}



// 🧪 TESTS - Décommente pour tester
console.log("=== EXERCICE 7 ===");
function quandPotionPrete(potion) {
  console.log("✅ Fabrication terminée:", potion);
  ajouterPotion(inventaire, potion);
}

const erreur = fabriquerPotionAvecDelai(
  "potion_soin",
  ["eau_de_source", "", "poudre_de_diamant"],
  quandPotionPrete,
  15,
  2
);

if (erreur instanceof Error) {
  console.error(erreur.message);
} else {
  console.log("⏳ Fabrication en cours...");
}


// ============================================
// EXERCICE 8 : Inventaires indépendants avec les Closures
// ============================================
// 🎯 Objectif : Découvrir les closures pour créer plusieurs inventaires indépendants
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée ta fonction creerInventaire() ci-dessous




// 🧪 TESTS - Décommente pour tester
// console.log("=== EXERCICE 8 ===");
// const boutiqueA = creerInventaire();
// const boutiqueB = creerInventaire();
//
// boutiqueA.ajouterPotion(fabriquerPotion("potion_soin", 10, 5));
// boutiqueB.ajouterPotion(fabriquerPotion("potion_mana", 15, 0));
//
// console.log("Boutique A - Potions en stock:", boutiqueA.getPotionsEnStock());
// console.log("Boutique B - Potions en rupture:", boutiqueB.getPotionsEnRupture());


// ============================================
// EXERCICE 9 : Bonus - Un sorcier a toujours la classe !
// ============================================
// 🎯 Objectif : Découvrir la syntaxe des classes en JavaScript
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée ta classe Inventaire ci-dessous




// 🧪 TESTS - Décommente pour tester
// console.log("=== EXERCICE 9 ===");
// const boutiqueC = new Inventaire();
// const boutiqueD = new Inventaire();
//
// boutiqueC.ajouterPotion(fabriquerPotion("potion_soin", 10, 5));
// boutiqueD.ajouterPotion(fabriquerPotion("potion_mana", 15, 0));
//
// console.log("Boutique C - Potions en stock:", boutiqueC.getPotionsEnStock());
// console.log("Boutique D - Potions en rupture:", boutiqueD.getPotionsEnRupture());
