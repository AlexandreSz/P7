//create an empty model
function displayData(recipesData) {
    const recipeSection = document.getElementById("recipesContainer");
    recipeSection.innerHTML = "";


    recipesData.forEach((cardData) => {
        const recipeModel = cardFactory(cardData);
        const recipeCardDOM = recipeModel.getRecipeCardDOM();
        recipeSection.appendChild(recipeCardDOM);
    });
}

function displayTagLists(recipesData) {
    //création d'un tableau ingredient, appareil et ustensils
    const ingList = [];
    const appList = [];
    const ustList = [];
    recipesData.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            if (!ingList.includes(ingredient.ingredient.toLowerCase())) {
                ingList.push(ingredient. /*name*/ ingredient.toLowerCase())
            }


            if (!appList.includes(recipe.appliance.toLowerCase())) {
                appList.push(recipe.appliance.toLowerCase())
            }


            recipe.ustensils.forEach((ustensil) => {
                if (!ustList.includes(ustensil.toLowerCase())) {
                    ustList.push(ustensil.toLowerCase())
                }
            })
        })

    })


    //Affichage de la liste des ingredients mis à jour
    displayIngredientsTagList(ingList)
        //Affichage de la liste des appareils mis à jour
    displayApplianceTagList(appList)
        //Affichage de la liste des ustensils mis à jour
    displayUstensilsTagList(ustList)
}


//ingredients
function getAllIngredients() {
    const ingredientsList = [];
    recipes.forEach((recipe) => {

        recipe.ingredients.forEach((ingredient) => {
            if (!ingredientsList.includes(ingredient.ingredient.toLowerCase())) {
                ingredientsList.push(ingredient. /*name*/ ingredient.toLowerCase())

            }
        })
    })
    return ingredientsList;

}

//appliance
function getAllApliance() {
    const applianceList = [];
    recipes.forEach((recipe) => {
        if (!applianceList.includes(recipe.appliance.toLowerCase())) {
            applianceList.push(recipe.appliance.toLowerCase())
        }
    })
    return applianceList;
}

//ustensils
function getAllUstensils() {
    const ustensilsList = [];
    recipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensil) => {
            if (!ustensilsList.includes(ustensil.toLowerCase())) {
                ustensilsList.push(ustensil.toLowerCase())
            }
        })
    })
    return ustensilsList;
}