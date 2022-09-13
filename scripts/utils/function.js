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