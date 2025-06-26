// Point d’entrée de mon application
import { getRecipes } from './dataLoader.js';
import { displayRecipes } from './display.js';

document.addEventListener("DOMContentLoaded", () => {
  const recipes = getRecipes(); // Je récupération les données depuis mon module
  displayRecipes(recipes); // Pour affichager les cards des recettes
});
