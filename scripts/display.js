import { createRecipeCard } from './recipeCard.js'; // fct pour générer les cartes de recettes.
import { selectTag, removeTag } from './tagManager.js'; // fct pour gérer les tags sélectionnés.
import { refreshRecipes } from './index.js'; // pour relancer la recherche quand un tag change.

export function displayRecipes(recipesArray) { // Fonction pour afficher un tableau de recettes.
  const container = document.getElementById("recipes-container"); // conteneur des cartes recettes
  const counter = document.getElementById("recipes-count"); // compteur qui affiche le nombre de recettes
  container.innerHTML = ""; // je vide
  recipesArray.forEach(recipe => { // pour chaque recette
    const card = createRecipeCard(recipe);
    container.appendChild(card); // je l’ajoute dans la pag
  });
  counter.textContent = `${recipesArray.length} recette${recipesArray.length > 1 ? 's' : ''}`; // maj du compteur avec le nombre de recettes affichées. ajout d'un "s" si plus d'une.
}

export function displaySelectedTags(tags) { // Fonction pour afficher les tags choisis par l’utilisateur.
  const tagContainer = document.getElementById("selected-tags"); // conteneur des tags
  tagContainer.innerHTML = ""; // je vide

  Object.keys(tags).forEach(type => { // Je parcourt chaque type de tag (ingredients, appliances, ustensils) et leurs valeurs.
    tags[type].forEach(tag => {
      const tagEl = document.createElement("span"); // je crée un span pour le tag, avec un style selon son type.
      tagEl.className = `tag tag-${type}`;
      tagEl.textContent = tag;

      const close = document.createElement("button"); // je crée un bouton pour supprimer le tag.
      close.className = "tag-close";
      close.textContent = "×";
      close.addEventListener("click", () => { //Quand on clique sur le X
        removeTag(type, tag); // je retire le tag
        refreshRecipes(document.getElementById("searchInput").value.trim()); // et je relance la recherche pour actualiser les recettes
      });
      // J'ajoute le bouton au tag et j'affiche le tag dans la page.
      tagEl.appendChild(close);
      tagContainer.appendChild(tagEl);
    });
  });
}

export function updateDropdownList(menuType, recipes, searchTerm = "") { // Fonction qui met à jour la liste des filtres (dropdowns).
  const listContainer = document.getElementById(`${menuType}-list`);
  listContainer.innerHTML = "";

  const items = getPossibleTagValues(menuType, recipes);

  items
  .filter(item => {
    if (!searchTerm) return true; // Aucun texte → on affiche tout
    if (searchTerm.length >= 3) {
      return item.includes(searchTerm); // Affiche les items qui contiennent le terme
    }
    return false; // Moins de 3 caractères → on affiche rien
  })
  .forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.addEventListener("click", () => {
      selectTag(menuType, item);
      refreshRecipes(document.getElementById("searchInput").value.trim());
    });
    listContainer.appendChild(li);
  });


}

function getPossibleTagValues(type, recipes) {
  let values = [];

  recipes.forEach(recipe => {
    if (type === 'ingredients') {
      values.push(...recipe.ingredients.map(i => i.ingredient));
    } else if (type === 'appliances') {
      values.push(recipe.appliance);
    } else if (type === 'ustensils') {
      values.push(...recipe.ustensils);
    }
  });

  // Je simplifie les items : est je garde le premier mot (avant l'espace)
  const simplified = values.map(v => v.toLowerCase().split(' ')[0]);

  // On retourne des valeurs uniques, triées
  return [...new Set(simplified)].sort();
}
