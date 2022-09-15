function toFilterRecipes(selectedIngredientsTags, selectedAppliancesTags, seclectedUstensilsTags) {


    let result1 = [];
    let result2 = [];
    let result3 = [];

    if (selectedIngredientsTags.length > 0) {
        for (let i = 0; i < recipes.length; i++) {
            const { ingredients, appliance, ustensils } = recipes[i];
            let isIncludedInSelectedTags = false;
            for (let y = 0; y < selectedIngredientsTags.length; y++) {
                if (ingredients.findIndex((ingredient) => ingredient.ingredient.toLowerCase() === selectedIngredientsTags[y].toLowerCase()) > -1) {
                    isIncludedInSelectedTags = true;
                } else {
                    isIncludedInSelectedTags = false;
                }
            }

            if (isIncludedInSelectedTags) {
                result1.push(recipes[i]);
            }
        }
    } else {
        result1 = recipes;
    }
    if (selectedAppliancesTags.length > 0) {
        for (let i = 0; i < result1.length; i++) {
            const { ingredients, appliance, ustensils } = result1[i];
            let isIncludedInSelectedTags = false;

            for (let y = 0; y < selectedAppliancesTags.length; y++) {
                console.log(appliance, selectedAppliancesTags[y]);
                if (appliance.toLowerCase() === selectedAppliancesTags[y].toLowerCase()) {
                    isIncludedInSelectedTags = true;
                } else {
                    isIncludedInSelectedTags = false;
                }
            }

            if (isIncludedInSelectedTags) {
                result2.push(result1[i]);
            }
        }
    } else {
        result2 = result1;
    }
    if (seclectedUstensilsTags.length > 0) {
        for (let i = 0; i < result2.length; i++) {
            const { ingredients, appliance, ustensils } = result2[i];
            let isIncludedInSelectedTags = false;
            for (let y = 0; y < seclectedUstensilsTags.length; y++) {
                if (ustensils.findIndex((ustensil) => ustensil.toLowerCase() === seclectedUstensilsTags[y].toLowerCase()) > -1) {
                    isIncludedInSelectedTags = true;
                } else {
                    isIncludedInSelectedTags = false;
                }
            }
            if (isIncludedInSelectedTags) {
                result3.push(result2[i]);
            }
        }
    } else {
        result3 = result2;
    }

    const results = result3;
    console.log(results)
    displayData(results);
    if (results.length < 1) {
        const err = document.getElementById("errorMess");
        console.log(err)
        err.style.display = "block"
    } else {
        const err = document.getElementById("errorMess");
        err.style.display = "none"
    }
}