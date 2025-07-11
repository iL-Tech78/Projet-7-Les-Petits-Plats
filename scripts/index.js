import { getRecipes } from './dataLoader.js';
import { displayRecipes, displaySelectedTags, updateDropdownList } from './display.js';
import { searchRecipes } from './search.js';
import { initTagMenus, getSelectedTags } from './tagManager.js';

let allRecipes = [];

document.addEventListener("DOMContentLoaded", () => {
  allRecipes = getRecipes();
  displayRecipes(allRecipes);
  initTagMenus(allRecipes);

  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearch");

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (query.length >= 3) {
      clearBtn.classList.remove("d-none");
    } else {
      clearBtn.classList.add("d-none");
    }
    refreshRecipes(query);
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.classList.add("d-none");
    refreshRecipes("");
  });
});

export function refreshRecipes(query) {
  const tags = getSelectedTags();
  const filtered = searchRecipes(allRecipes, query, tags);
  displayRecipes(filtered);
  displaySelectedTags(tags);
  ['ingredients', 'appliances', 'ustensils'].forEach(type => {
    updateDropdownList(type, filtered);
  });
}
