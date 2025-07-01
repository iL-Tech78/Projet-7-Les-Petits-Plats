// import { displayRecipes } from './display.js';

// export function searchRecipes(recipes, query) {
//   const lowerQuery = query.toLowerCase().trim();

//   const filtered = recipes.filter((recipe) => {
//     const nameMatch = recipe.name.toLowerCase().includes(lowerQuery);
//     const descriptionMatch = recipe.description.toLowerCase().includes(lowerQuery);
//     const ingredientsMatch = recipe.ingredients.some(ing =>
//       ing.ingredient.toLowerCase().includes(lowerQuery)
//     );

//     return nameMatch || descriptionMatch || ingredientsMatch;
//   });

//   return filtered;
// }

export function searchRecipesFunctional(recipes, query) {
  const lowerQuery = query.toLowerCase().trim();

  return recipes.filter(recipe => {
    const nameMatch = recipe.name.toLowerCase().includes(lowerQuery);
    const descriptionMatch = recipe.description.toLowerCase().includes(lowerQuery);
    const ingredientsMatch = recipe.ingredients.some(ing =>
      ing.ingredient.toLowerCase().includes(lowerQuery)
    );

    return nameMatch || descriptionMatch || ingredientsMatch;
  });
}
