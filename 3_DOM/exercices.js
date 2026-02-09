// ============================================
// EXERCICE 1 : Quel est le titre de la boutique ?
// ============================================
// 🎯 Objectif : Apprendre à sélectionner un élément HTML et récupérer son contenu
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne le <h1> et affiche son texte dans la console

const titre = document.querySelector('h1')
console.log(titre.textContent)

// ============================================
// EXERCICE 2 : Des informations manquent !
// ============================================
// 🎯 Objectif : Créer et ajouter un nouvel élément HTML dans le DOM
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Crée un nouveau paragraphe et ajoute-le dans #description_boutique

const conteneurDescription = document.querySelector("#description_boutique")
const nouveauParagraphe = document.createElement("p")
nouveauParagraphe.textContent = "Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter."
conteneurDescription.appendChild(nouveauParagraphe)

// ============================================
// EXERCICE 3 : Roger, enfoiré !
// ============================================
// 🎯 Objectif : Supprimer un élément HTML du DOM
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Supprime le <span id="blague_de_roger_le_sorcier">

const elementDelete = document.querySelector("#blague_de_roger_le_sorcier")
elementDelete.remove()

// ============================================
// EXERCICE 4 : Archibald n'est pas là, appelons-le !
// ============================================
// 🎯 Objectif : Gérer les événements de clic
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Ajoute un événement 'click' sur le bouton #call_archibald

const button = document.querySelector("#call_archibald")
button.addEventListener('click', function () {
  alert("🧙‍♂️ J'arrive, j'arrive Aventurier !")
})

// ============================================
// EXERCICE 5 : Faisons un peu de magie 🪄
// ============================================
// 🎯 Objectif : Sélectionner plusieurs éléments et modifier leurs styles
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Récupère toutes les boîtes et les boutons de couleur
// Ajoute des événements pour changer les couleurs

const listBoite = document.querySelectorAll('.boite')
const buttonRed = document.querySelector("#btn_change_red")
const buttonBlue = document.querySelector("#btn_change_blue")
const buttonGreen = document.querySelector("#btn_change_green")

buttonRed.addEventListener('click', function () {
  listBoite[0].style.backgroundColor = "red"
})

buttonBlue.addEventListener('click', function() {
  listBoite[1].style.backgroundColor = "blue"
})

buttonGreen.addEventListener('click', function() {
  listBoite[0].style.backgroundColor = "green",
  listBoite[1].style.backgroundColor = "green"
  listBoite[2].style.backgroundColor = "green"
})

// ============================================
// EXERCICE 6 : Aventurier, voici ma boutique !
// ============================================
// 🎯 Objectif : Utiliser les templates HTML pour créer des éléments complexes
// 📖 Consignes : Consulte le README pour les détails

// 📦 Données des potions
const potions = [
  {
    nom: "Potion de soin",
    description:
      "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
    prix: 10,
  },
  {
    nom: "Potion de sommeil",
    description:
      "Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
    prix: 50,
  },
];

// ✍️ TON CODE ICI
// Crée une fonction pour afficher une potion à partir du template
// Parcours le tableau potions et affiche chaque potion

const conteneurPotion = document.querySelector('#liste_potions')
const templatePotion = document.querySelector('#template_potion')

potions.forEach((potion) => {

  const clone = templatePotion.content.cloneNode(true)

  clone.querySelector(".nom_potion").textContent = potion.nom
  clone.querySelector(".prix_potion").textContent = potion.prix
  clone.querySelector(".description_potion").textContent = potion.description

  conteneurPotion.appendChild(clone)

});

// ============================================
// EXERCICE 7 : Plus de potions, nous avons besoin de plus de potions !
// ============================================
// 🎯 Objectif : Gérer les formulaires et réutiliser du code
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Récupère le formulaire et gère l'événement 'submit'
// Utilise FormData pour extraire les valeurs
// Réutilise la fonction de l'exercice 6 pour ajouter la nouvelle potion


function afficherPotion(potion) {

  const conteneurPotion = document.querySelector('#liste_potions')
  const templatePotion = document.querySelector('#template_potion')
  const clone = templatePotion.content.cloneNode(true)

  clone.querySelector(".nom_potion").textContent = potion.nom
  clone.querySelector(".prix_potion").textContent = potion.prix
  clone.querySelector(".description_potion").textContent = potion.description

  conteneurPotion.appendChild(clone)

};

const formulaire = document.querySelector("form")

formulaire.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(formulaire)
  const nouvellePotion = {
  nom: formData.get("nom"),
  description: formData.get("description"),
  prix: formData.get("prix"),

  };

  afficherPotion(nouvellePotion);
})

// ============================================
// EXERCICE 8 : Le Miroir Magique 🪞
// ============================================
// 🎯 Objectif : Utiliser classList pour ajouter/retirer des classes CSS
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne le miroir et les éléments à afficher/cacher
// Utilise mouseenter et mouseleave pour détecter le survol
// Utilise classList.remove() et classList.add() pour afficher le reflet

const miroir = document.querySelector("#magic-mirror");
const texte = document.querySelector(".mirror-text");
const reflet = document.querySelector(".mirror-reflection");

miroir.addEventListener("mouseenter", () => {

  reflet.classList.remove("hidden");

});

miroir.addEventListener("mouseleave", () => {

  reflet.classList.add("hidden");

});


// ============================================
// EXERCICE 9 : L'Arbre Généalogique des Potions 🌳
// ============================================
// 🎯 Objectif : Naviguer dans le DOM avec parentElement, children, etc.
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne toutes les catégories de potions
// Pour chaque catégorie, trouve la liste (children)
// Ajoute la classe 'first' au premier item et 'last' au dernier item

const category = document.querySelectorAll('.potion-category')
const firstCategory = category[0]
const secondCategory = category[1]

const list1 = firstCategory.children
const list2 = secondCategory.children

const items1 = firstCategory.querySelectorAll('.potion-item')
items1[0].classList.add('first')
items1[items1.length - 1].classList.add('last')

const items2 = secondCategory.querySelectorAll('.potion-item')
items2[0].classList.add('first')
items2[items2.length - 1].classList.add('last')

// AVEC BOUCLE FOR
// const categories = document.querySelectorAll('.potion-category');

// for (let i = 0; i < categories.length; i++) {
//   const category = categories[i];
//   const items = category.querySelectorAll('.potion-item');

//   if (items.length > 0) {
//     items[0].classList.add('first'); // premier élément
//     items[items.length - 1].classList.add('last'); // dernier élément
//   }
// }


// ============================================
// EXERCICE 10 : Les Étiquettes Magiques 🏷️
// ============================================
// 🎯 Objectif : Utiliser les attributs data-* et dataset
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne tous les boutons "Plus d'infos"
// Pour chaque bouton, ajoute un événement click
// Récupère les data attributes de la potion parente
// Affiche les infos dans la div .potion-info

// ============================================
// EXERCICE 11 : Validation Magique en Temps Réel ✨
// ============================================
// 🎯 Objectif : Valider un formulaire en temps réel avec les événements input
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne tous les champs du formulaire
// Ajoute un événement 'input' sur chaque champ
// Valide le champ (min 3 caractères pour texte, > 0 pour prix)
// Ajoute les classes 'valid' ou 'invalid' et affiche un message
// Active/désactive le bouton submit selon la validité globale

// ============================================
// EXERCICE 12 : Calculateur de Commande 🧮
// ============================================
// 🎯 Objectif : Calculer automatiquement le total d'une commande
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne tous les inputs de quantité
// Pour chaque input, ajoute un événement 'input' ou 'change'
// Calcule le total de la ligne (quantité × prix)
// Affiche le total de la ligne
// Calcule et affiche le total général

// ============================================
// EXERCICE 13 : Recherche de Potions 🔍
// ============================================
// 🎯 Objectif : Filtrer des éléments en temps réel avec une barre de recherche
// 📖 Consignes : Consulte le README pour les détails

// ✍️ TON CODE ICI
// Sélectionne le champ de recherche et toutes les cartes de potions
// Ajoute un événement 'input' sur le champ de recherche
// Pour chaque potion, vérifie si le nom ou la description contient le texte recherché
// Affiche/cache les potions avec classList.add/remove('hidden')
// Affiche le nombre de résultats et le message "Aucune potion trouvée" si besoin
