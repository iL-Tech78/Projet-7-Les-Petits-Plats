// Je génère le HTML d’une seule card recette à partir d’un objet recipe
export function createRecipeCard(recipe) { // Je crée et j'exporte ma fonction
    const col = document.createElement("div");
    col.className = "col-md-4";
  
    const ingredientsList = recipe.ingredients
      .map((item) => {
        const qty = item.quantity ? ` : ${item.quantity}` : "";
        const unit = item.unit ? item.unit : "";
        return `<li class="col-6"><strong>${item.ingredient}</strong>${qty} ${unit}</li>`;
      })
      .join("");
  
    col.innerHTML = `
      <article class="recipe-card">
        <div class="recipe-img-container">
          <img src="assets/img/recipes/Recette${recipe.id}.jpg" alt="${recipe.name}" class="recipe-img">
          <span class="recipe-time">${recipe.time}min</span>
        </div>
        <div class="recipe-body p-3">
          <h2 class="recipe-title mb-3">${recipe.name}</h2>
          <h3 class="recipe-subtitle">RECETTE</h3>
          <p class="recipe-description">${recipe.description}</p>
          <h3 class="recipe-subtitle mt-4">INGRÉDIENTS</h3>
          <ul class="recipe-ingredients row list-unstyled">
            ${ingredientsList}
          </ul>
        </div>
      </article>
    `;
  
    return col;
}