import { updateDropdownList } from './display.js'; // J'importe la fonction updateDropdownList qui s’occupe de mettre à jour la liste affichée dans les menus de tags.

const selectedTags = { // Je crée un objet selectedTags qui contient : un tableau pour les tags ingrédients sélectionnés un pour les appareils un pour les ustensiles
    ingredients: [],
    appliances: [],
    ustensils: []
};

export function initTagMenus(allRecipes) {
    ['ingredients', 'appliances', 'ustensils'].forEach(type => { //  Je parcourt les 3 types de tags
        const dropdown = document.getElementById(`${type}-dropdown`); // le récupère : le menu deroulant
        const button = document.getElementById(`${type}-button`); // le btn
        const input = document.getElementById(`${type}-input`); // et la barre de recherche

        button.addEventListener('click', () => {
        dropdown.classList.toggle('open');
        });

        input.addEventListener('input', (e) => { // Quand j'ecrie
        const searchTerm = e.target.value.trim().toLowerCase(); // Je nettoie l’entrée et on la met en minuscules
        updateDropdownList(type, allRecipes, searchTerm); // Je met à jour la liste d’options avec ce terme
        });
    });

}

export function selectTag(type, tag) { // j'ajoute un tag au tableau correspondant si ce tag n’y est pas déjà.
    if (!selectedTags[type].includes(tag)) {
        selectedTags[type].push(tag);
    }
}

export function removeTag(type, tag) { // Je supprime un tag du tableau de tags sélectionnés.
    selectedTags[type] = selectedTags[type].filter(t => t !== tag);
}

export function getSelectedTags() {
    return selectedTags;
}