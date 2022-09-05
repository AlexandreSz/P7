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
                // if (ustensils.findIndex((ustensil) => ustensil.toLowerCase() === selectedTags[y].toLowerCase()) > -1) {
                //     isIncludedInSelectedTags = true;
                // }
            }

            if (isIncludedInSelectedTags) {
                result1.push(recipes[i]);

            }
        }
    } else {
        result1 = recipes;
    }

    // for (let i = 0; i < result1.length; i++) {
    //     const { ingredients, appliance, ustensils } = recipes[i];
    //     let isIncludedInSelectedTags = false;

    //     for (let y = 0; y < selectedAppliancesTags.length; y++) {
    //         console.log(appliance, selectedAppliancesTags[y]);
    //         if (appliance.toLowerCase() === selectedAppliancesTags[y].toLowerCase()) {
    //             isIncludedInSelectedTags = true;
    //         }
    //     }

    //     if (isIncludedInSelectedTags) {
    //         result2.push(result1[i]);

    //     }
    // }
    const results = result1;
    if (results.length) {
        console.log(results)
        displayData(results);
    }
}