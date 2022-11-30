const searchInput = document.querySelector('#searchBar');
const searchResult = document.getElementById("recipesContainer");
searchInput.addEventListener("input", globaleSearch);


//Recherche complète texte + tag
function globaleSearch(event) {
    let searchResults = [];


    // recherche texte
    let results = [];

    //On récupère la valeur du champ texte
    const searchString = document.getElementById('searchBar').value.toLowerCase()

    if (searchString.length >= 3) {

        let searchkeybord = recipes.filter(el => {
            // si la description ou le nom contiennent le texte
            if (el.name.toLowerCase().includes(searchString) || el.description.toLowerCase().includes(searchString)) {
                return true;
            } else {
                //si l'ingredient contient le texte
                const filteredIng = el.ingredients.filter(ingredient => ingredient.ingredient.toLowerCase().includes(searchString))
                if (filteredIng.length > 0) {
                    return true;
                }
            }
        });
        results = searchkeybord;


    } else {
        results = recipes
    }
    if (results.length == 0) {
        displayData(results)
        displayTagLists(results)
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
        results.forEach((result) => {
            let matchedIng = 0;
            //je boucle sur les tags d'ingrédients
            selectedIngredientsTags.forEach((selectedIngredientsTag) => {
                if (result.ingredients.findIndex((ingredient) => ingredient.ingredient.toLowerCase() === selectedIngredientsTag.toLowerCase()) > -1) {
                    matchedIng++;
                }
                //si je trouve bien tous les ingredients
                if (matchedIng == selectedIngredientsTags.length) {
                    resultFromIngredients.push(result)
                }
            })
        })

    } else {
        resultFromIngredients = results;
    }


    //Appliances
    if (selectedAppliancesTags.length > 0) {
        //je boucle sur mes recettes
        resultFromIngredients.forEach((resultFromIngredient) => {
            let matchedApp = 0;
            //je boucle sur les tags d'ingrédients
            selectedAppliancesTags.forEach((selectedAppliancesTag) => {
                if (resultFromIngredient.appliance.toLowerCase() === selectedAppliancesTag.toLowerCase()) {
                    matchedApp++;
                }
                //si je trouve bien tous les appliances
                if (matchedApp == selectedAppliancesTags.length) {
                    resultFromAppliances.push(resultFromIngredient)
                }
            })
        })

    } else {
        resultFromAppliances = resultFromIngredients;
    }


    //Ustensils
    if (seclectedUstensilsTags.length > 0) {
        //je boucle sur mes recettes
        resultFromAppliances.forEach((resultFromAppliance) => {
            let matchedUst = 0;
            //je boucle sur les tags d'ingrédients
            seclectedUstensilsTags.forEach((selectedUstensilsTag) => {
                if (resultFromAppliance.ustensils.findIndex((ustensil) => ustensil.toLowerCase() === selectedUstensilsTag.toLowerCase()) > -1) {
                    matchedUst++;
                }
                //si je trouve bien tous les ingredients
                if (matchedUst == seclectedUstensilsTags.length) {
                    resultFromUstensils.push(resultFromAppliance)
                }
            })
        })

    } else {
        resultFromUstensils = resultFromAppliances;
    }

    //on récupère le tableau des résultats passés dans tous les filtres
    searchResults = resultFromUstensils;

    //On affiche les resultats
    displayData(searchResults)
    displayTagLists(searchResults)
}