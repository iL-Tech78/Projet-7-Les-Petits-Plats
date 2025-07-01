// Point d’entrée de mon application
import { getRecipes } from './dataLoader.js';
import { displayRecipes } from './display.js';
import { searchRecipesFunctional } from './search.js';

let allRecipes = [];

document.addEventListener("DOMContentLoaded", () => {
  allRecipes = getRecipes(); // Je récupération les données depuis mon module
  displayRecipes(allRecipes); // Pour affichager les cards des recettes

  // J'écoute de la recherche
  const clearBtn = document.getElementById("clearSearch");
  const searchInput = document.getElementById("searchInput");
  
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value;

    // Afficher ou masquer le bouton "X"
    if (query.length >= 3) {
      clearBtn.classList.remove("d-none");
    } else {
      clearBtn.classList.add("d-none");
    }

    if (query.length < 3) {
      displayRecipes(allRecipes);
    } else {
      const results = searchRecipesFunctional(allRecipes, query);
      displayRecipes(results);
    }
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.classList.add("d-none");
    displayRecipes(allRecipes);
  });

});
