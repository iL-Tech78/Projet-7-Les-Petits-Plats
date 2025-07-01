// J'affiche toutes les recettes dans la page en appelant createRecipeCard() pour chacune.
import { createRecipeCard } from './recipeCard.js'; // J'importe la fonction createRecipeCard qui est dans recipeCard.js pour générer la carte HTML pour chaque recette.

export function displayRecipes(recipesArray) { // j'export pour l'utiliser dans index.js
  const container = document.getElementById("recipes-container"); // Je cible mon container
  const counter = document.getElementById("recipes-count"); // Je coble mon compteur
  container.innerHTML = ""; // Je vide le conteneur avant d’injecter pour éviter d’empiler les anciennes cartes avec les nouvelles.

  recipesArray.forEach(recipe => { // Je parcourt le tableau des recettes avec forEach. Pour chaque recette
    const card = createRecipeCard(recipe); // Je crée sa carte
    container.appendChild(card); // Je l'ajoute dans le container
  });
  counter.textContent = `${recipesArray.length} recette${recipesArray.length > 1 ? 's' : ''}`; // Maj je mets a jours le compteur de recettes affichées.
}
