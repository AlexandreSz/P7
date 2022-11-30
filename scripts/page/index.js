const selectedIngredientsTags = [];
const seclectedUstensilsTags = [];
const selectedAppliancesTags = [];







//step 2 : retrieve the data x insert it into the empty slots
function init() {
    displayData(recipes);
    displayIngredientsTagList(getAllIngredients());
    displayApplianceTagList(getAllApliance());
    displayUstensilsTagList(getAllUstensils());

}

//step 3 : start it all
window.onload = init;