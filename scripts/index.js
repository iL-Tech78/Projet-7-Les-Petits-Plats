// Point d’entrée de mon application
import { getRecipes } from './dataLoader.js'; // J'importe la fonction qui récupère les recettes depuis ton module de données.
import { displayRecipes } from './display.js'; // J'importe la fonction qui affiche les cartes recettes dans la page.
import { searchRecipesNative } from './search.js'; // J'importe la fonction qui filtre les recettes selon la recherche utilisateur.

let allRecipes = []; // Ce tableau contient toutes les recettes au chargement.

document.addEventListener("DOMContentLoaded", () => {
  allRecipes = getRecipes(); // J'appelle getRecipes() pour récupérer le tableau des recettes et je stock tout dans allRecipes.
  displayRecipes(allRecipes); // J'affiche toutes les recettes dès que la page est chargée.

  const clearBtn = document.getElementById("clearSearch"); // Je récupère le bouton "X" qui permet de vider la recherche.
  const searchInput = document.getElementById("searchInput"); // Je récupère le champ de recherche principal.
  
  searchInput.addEventListener("input", (e) => { // J'écoute l’événement input à chaque fois que l’utilisateur tape dans la barre.
    const query = e.target.value; // Je récupère ce que l’utilisateur a tapé.

    // J'afficher ou je masque le bouton "X"
    if (query.length >= 3) {
      clearBtn.classList.remove("d-none");
    } else {
      clearBtn.classList.add("d-none");
    }
    // Si moins de 3 caractère je ré-affiche toutes les recettes. sinon je filtre grace searchRecipes puis j'affiche
    if (query.length < 3) {
      displayRecipes(allRecipes);
    } else {
      const results = searchRecipesNative(allRecipes, query);
      displayRecipes(results);
    }
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.classList.add("d-none");
    displayRecipes(allRecipes);
  });

});
