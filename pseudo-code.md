Option 1 — Boucles natives

Je dois créer un tableau vide résultats

Pour chaque recette dans toutes les recettes :
Il faut que je convertir le nom et la description en minuscules
Si nom contient la recherche OU description contient la recherche :
J'Ajoute la recette dans résultats
Sinon :
Pour chaque ingrédient de la recette :
Convertir l’ingrédient en minuscule
Si l’ingrédient contient la recherche :
Ajouter la recette dans résultats
Sortir de la boucle des ingrédients
(break)

Ensuite il faut que je retourner le tableau résultats

Option 2 — Méthodes fonctionnelles

Retourner :
Toutes les recettes filtrées :
Si nom en minuscule contient la recherche
OU description en minuscule contient la recherche
OU un ingrédient contient la recherche :
Ensuite vérifier avec la methode some sur le tableau des ingrédients
