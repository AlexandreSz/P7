const searchInput = document.getElementById('searchBar');
const searchResult = document.getElementById("recipesContainer");
searchInput.addEventListener("input", globaleSearch);

// Recherche complète "Texte + Tags"
function globaleSearch(event) {
    let searchResults = [];

    //Recherche Texte
    let searchTextResults = [];

    //On récupère la valeur du champ texte
    const searchString = document.getElementById('searchBar').value.toLowerCase()

    //Filtre textuel en premier, uniquement si le texte > 3 caractères
    if (searchString.length >= 3) {
        //je boucle sur toute les recettes
        for (let i = 0; i < recipes.length; i++) {
            //si la description ou le nom contiennent le texte
            if (
                recipes[i].description.toLowerCase().includes(searchString) ||
                recipes[i].name.toLowerCase().includes(searchString)
            ) {
                //je mets la recette dans les résultats
                searchTextResults.push(recipes[i]);
            } else {
                //je boucle sur les ingredients de la recette
                for (let j = 0; j < recipes[i].ingredients.length; j++) {
                    //si l'ingredient contient le texte
                    if (recipes[i].ingredients[j].ingredient.toLowerCase().includes(searchString))
                    //je mets la recette dans les résultats
                        searchTextResults.push(recipes[i])
                }
            }
        }
    } else {
        searchTextResults = recipes;
    }

    // Si searchTextResults.length est 0 ==> on a recherché mais trouvé aucune recette ==> On affiche l'erreur et on stop
    if (searchTextResults.length == 0) {
        displayData(searchTextResults)
        displayTagLists(searchTextResults)
            //On sort de la fonction
        searchResult.innerHTML = 'Aucune recette ne correspond à la recherche'
        return;
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////

    //Recherche par Tag
    let resultFromIngredients = [];
    let resultFromAppliances = [];
    let resultFromUstensils = [];

    //Ingredients
    if (selectedIngredientsTags.length > 0) {
        //je boucle sur mes recettes
        for (let i = 0; i < searchTextResults.length; i++) {
            const { ingredients } = searchTextResults[i];
            let matchedIng = 0;
            //je boucle sur les tags d'ingrédients
            for (let y = 0; y < selectedIngredientsTags.length; y++) {
                if (ingredients.findIndex((ingredient) => ingredient.ingredient.toLowerCase() === selectedIngredientsTags[y].toLowerCase()) > -1) {
                    matchedIng++;
                }
            }
            //si je trouve bien tous les ingredients
            if (matchedIng == selectedIngredientsTags.length) {
                //j'ajoute la recette
                resultFromIngredients.push(searchTextResults[i])
            }
        }
    } else {
        resultFromIngredients = searchTextResults;
    }


    //Appliances
    if (selectedAppliancesTags.length > 0) {
        //je boucle sur mes recettes
        for (let i = 0; i < resultFromIngredients.length; i++) {
            const { ingredients, appliance } = resultFromIngredients[i];
            let matchedApp = 0;
            //je boucle sur les tags d'ingrédients
            for (let y = 0; y < selectedAppliancesTags.length; y++) {
                if (appliance.toLowerCase() === selectedAppliancesTags[y].toLowerCase()) {
                    matchedApp++;
                }
            }
            //si je trouve bien tous les appliances
            if (matchedApp == selectedAppliancesTags.length) {
                //j'ajoute la recette
                resultFromAppliances.push(resultFromIngredients[i])
            }
        }
    } else {
        resultFromAppliances = resultFromIngredients;
    }

    //Ustensils
    if (seclectedUstensilsTags.length > 0) {
        for (let i = 0; i < resultFromAppliances.length; i++) {
            const { ingrdients, appliances, ustensils } = resultFromAppliances[i];
            let matchedUST = 0;
            for (let y = 0; y < seclectedUstensilsTags.length; y++) {
                if (ustensils.findIndex((ustensil) => ustensil.toLowerCase() === seclectedUstensilsTags[y].toLowerCase()) > -1) {
                    matchedUST++;
                }
            }
            if (matchedUST == seclectedUstensilsTags.length) {
                resultFromUstensils.push(resultFromAppliances[i])
            }
        }
    } else {
        resultFromUstensils = resultFromAppliances;
    }

    //on récupère le tableau des résultats passés dans tous les filtres
    searchResults = resultFromUstensils;

    //On affiche les resultats
    displayData(searchResults)
    displayTagLists(searchResults)
}