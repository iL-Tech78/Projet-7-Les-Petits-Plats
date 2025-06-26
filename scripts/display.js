// J'affiche toutes les recettes dans la page en appelant createRecipeCard() pour chacune.
import { createRecipeCard } from './recipeCard.js';

export function displayRecipes(recipesArray) {
  const container = document.getElementById("recipes-container");
  container.innerHTML = ""; // Je vide le conteneur avant d’injecter

  recipesArray.forEach(recipe => {
    const card = createRecipeCard(recipe);
    container.appendChild(card);
  });
}
