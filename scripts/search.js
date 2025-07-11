export function searchRecipes(recipes, query, tags) { // Fct qui recois la liste des recette, le texte taper par l'utilisateur, et le tags.
  const normalizedQuery = query.toLowerCase(); // tout en minuscule

  return recipes.filter(recipe => { // JE parcourt les recettes et je garde seulement celles qui correspondent aux critères. Le .filter renvoie un nouveau tableau avec uniquement les recettes valides.
    // Recherche principale
    const matchQuery = !query || ( //  Si la query est vide → c’est un match (!query). Sinon, je regarde si :
      recipe.name.toLowerCase().includes(normalizedQuery) || // le nom de la recette contient le texte
      recipe.description.toLowerCase().includes(normalizedQuery) ||// ou la description
      recipe.ingredients.some(i => i.ingredient.toLowerCase().includes(normalizedQuery)) // ou un des ingrédients.
    );

    // Recherche par tags
    const matchIngredients = tags.ingredients.every(tag => // Je vérifie que chaque tag ingrédient sélectionné existe dans les ingrédients de la recette.
      recipe.ingredients.some(i => i.ingredient.toLowerCase() === tag.toLowerCase())
    );
    const matchAppliance = tags.appliances.every(tag =>
      recipe.appliance.toLowerCase() === tag.toLowerCase()
    );
    const matchUstensils = tags.ustensils.every(tag =>
      recipe.ustensils.some(u => u.toLowerCase() === tag.toLowerCase())
    );

    return matchQuery && matchIngredients && matchAppliance && matchUstensils; // Le recette est retenue seulement si : elle correspond à la recherche principale et tous les tags sont présents.
  });
}

// Boucles classiques

export function searchRecipes(recipes, query, tags) { // Fct qui recois la liste des recette, le texte taper par l'utilisateur, et le tags.
  const normalizedQuery = query.toLowerCase();
  const result = []; // tableau qui contient les recettes validées.

  for (let i = 0; i < recipes.length; i++) { // Je parcourt chaque recette
    const recipe = recipes[i];

    // Recherche principale
    let matchQuery = false; // Je part du principe que ça ne matche pas.

    if (!query) { // Si pas de recherche, la recette est considérée comme un match.
      matchQuery = true; 
    } else {
      if (recipe.name.toLowerCase().includes(normalizedQuery)) { // si le nom matche = OK.
        matchQuery = true;
      } else if (recipe.description.toLowerCase().includes(normalizedQuery)) { // sinon si la description matche = OK.
        matchQuery = true;
      } else {
        for (let j = 0; j < recipe.ingredients.length; j++) { // sinon on parcourt les ingrédients
          if (recipe.ingredients[j].ingredient.toLowerCase().includes(normalizedQuery)) {
            matchQuery = true; // si un ingrédient matche = OK et je sort du for.
            break;
          }
        }
      }
    }

    // Recherche par tags
    let matchIngredients = true;
    for (let j = 0; j < tags.ingredients.length; j++) {
      const tag = tags.ingredients[j].toLowerCase();
      let found = false;
      for (let k = 0; k < recipe.ingredients.length; k++) {
        if (recipe.ingredients[k].ingredient.toLowerCase() === tag) {
          found = true;
          break;
        }
      }
      if (!found) {
        matchIngredients = false;
        break;
      }
    }

    let matchAppliance = true;
    for (let j = 0; j < tags.appliances.length; j++) {
      if (recipe.appliance.toLowerCase() !== tags.appliances[j].toLowerCase()) {
        matchAppliance = false;
        break;
      }
    }

    let matchUstensils = true;
    for (let j = 0; j < tags.ustensils.length; j++) {
      const tag = tags.ustensils[j].toLowerCase();
      let found = false;
      for (let k = 0; k < recipe.ustensils.length; k++) {
        if (recipe.ustensils[k].toLowerCase() === tag) {
          found = true;
          break;
        }
      }
      if (!found) {
        matchUstensils = false;
        break;
      }
    }

    // Si tout correspond, on ajoute au résultat
    if (matchQuery && matchIngredients && matchAppliance && matchUstensils) {
      result.push(recipe);
    }
  }

  return result;
}