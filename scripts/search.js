// import { displayRecipes } from './display.js';

// export function searchRecipes(recipes, query) {  // j'export pour l'utiliser dans index.js. La fonction prends deux params : Le  tableau de recettes et la chaîne de recherche entrée par l’utilisateur.
//   const lowerQuery = query.toLowerCase().trim(); // ici je prepare la chaine de recherche j'enlever les espaces...

//   const filtered = recipes.filter((recipe) => { // grace a filter je parcourt toutes les recettes et garde seulement celles qui correspondent à la recherche.
//     const nameMatch = recipe.name.toLowerCase().includes(lowerQuery); // Je vérifie si le nom de la recette contient le texte recherché.
//     const descriptionMatch = recipe.description.toLowerCase().includes(lowerQuery); // Je vérifie si la description de la recette contient le texte recherché.
//     const ingredientsMatch = recipe.ingredients.some(ing =>
//       ing.ingredient.toLowerCase().includes(lowerQuery) // Je vérifie si au moins un ingrédient de la recette contient le texte recherché.
//     );

//     return nameMatch || descriptionMatch || ingredientsMatch; // Je garde la recette si son nom correspond, ou sa description correspond, ou un de ses ingrédients correspond.
//   });

//   return filtered; // Je retourne donc un nouveau tableau contenant uniquement les recettes correspondantes à la recherche.
// }

export function searchRecipesNative(recipes, query) {
  const lowerQuery = query.toLowerCase().trim();
  const results = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    const nameMatch = recipe.name.toLowerCase().includes(lowerQuery);
    const descriptionMatch = recipe.description.toLowerCase().includes(lowerQuery);

    if (nameMatch || descriptionMatch) {
      results.push(recipe);
    } else {
      for (let j = 0; j < recipe.ingredients.length; j++) {
        const ingredientName = recipe.ingredients[j].ingredient.toLowerCase();
        if (ingredientName.includes(lowerQuery)) {
          results.push(recipe);
          break; // Pas besoin de continuer à vérifier les autres ingrédients
        }
      }
    }
  }

  return results;
}
