//show selected tags
let showSelectedTagsContainer = document.getElementById("showSelectedTag");


function showSelectedTags() {
    showSelectedTagsContainer.innerHTML = "";
    showSelectedTagsContainer.classList.add('selectedtags');

    //ingredients
    if (selectedIngredientsTags.length !== 0 /*ou > à, le tableau contient qqc*/ ) {
        selectedIngredientsTags.forEach((selectedIngredientTag, index /*à quel position il est*/ ) => {
            const ingredientTagElement = document.createElement('span');
            ingredientTagElement.classList.add('tags_item');
            ingredientTagElement.classList.add('tags_item_blue');
            ingredientTagElement.innerHTML = selectedIngredientTag;

            const removeTagElement = document.createElement('span');
            const img = document.createElement("i");
            img.setAttribute('class', "fa-regular fa-circle-xmark");

            removeTagElement.addEventListener('click', (event) => {
                selectedIngredientsTags.splice(index, 1);
                showSelectedTagsContainer.removeChild(ingredientTagElement);
                globaleSearch()
            })

            removeTagElement.appendChild(img);
            ingredientTagElement.appendChild(removeTagElement);
            showSelectedTagsContainer.appendChild(ingredientTagElement);
        })
    }

    //appareils
    if (selectedAppliancesTags.length !== 0 /*ou > à, le tableau contient qqc*/ ) {
        selectedAppliancesTags.forEach((selectedApplianceTag, index /*à quel position il est*/ ) => {
            const applianceTagElement = document.createElement('span');
            applianceTagElement.classList.add('tags_item');
            applianceTagElement.classList.add('tags_item_green');
            applianceTagElement.innerHTML = selectedApplianceTag;


            const removeTagElement = document.createElement('span');
            const img = document.createElement("i");
            img.setAttribute('class', "fa-regular fa-circle-xmark");

            removeTagElement.addEventListener('click', (event) => {
                selectedAppliancesTags.splice(index, 1);
                showSelectedTagsContainer.removeChild(applianceTagElement);
                globaleSearch()
            })

            removeTagElement.appendChild(img);
            applianceTagElement.appendChild(removeTagElement);
            showSelectedTagsContainer.appendChild(applianceTagElement);
        })
    }

    // //ustensils
    if (seclectedUstensilsTags.length !== 0 /*ou > à, le tableau contient qqc*/ ) {
        seclectedUstensilsTags.forEach((selectedUstensilTag, index /*à quel position il est*/ ) => {
            const ustensilTagElement = document.createElement('span');
            ustensilTagElement.classList.add('tags_item');
            ustensilTagElement.classList.add('tags_item_red');
            ustensilTagElement.innerHTML = selectedUstensilTag;

            const removeTagElement = document.createElement('span');
            const img = document.createElement("i");
            img.setAttribute('class', "fa-regular fa-circle-xmark");

            removeTagElement.addEventListener('click', (event) => {
                seclectedUstensilsTags.splice(index, 1);
                showSelectedTagsContainer.removeChild(ustensilTagElement);
                globaleSearch()
            })

            removeTagElement.appendChild(img);
            ustensilTagElement.appendChild(removeTagElement);
            showSelectedTagsContainer.appendChild(ustensilTagElement);
        })
    }
}