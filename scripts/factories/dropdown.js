let showSelectedTagsinHtml = document.getElementById("showSelectedTags");

//dropdownMenu all link
const dropdownMenuLinkBlue = document.getElementById("dropdownMenuLinkBlue");
const dropdownMenuLinkGreen = document.getElementById("dropdownMenuLinkGreen");
const dropdownMenuLinkRed = document.getElementById("dropdownMenuLinkRed");

//ingredients
function displayIngredientsTagList(ingredients) {
    const ingredientsTagsList = document.getElementById('ingredientsTagsList');
    ingredientsTagsList.innerHTML = "";

    ingredients.forEach((ingredient) => {
        const listElement = document.createElement('li');
        listElement.classList.add('dropdown-item');
        const dropdownLinkElement = document.createElement('a');
        dropdownLinkElement.textContent = ingredient.toLowerCase();
        dropdownLinkElement.addEventListener('click', function(event) {
            selectedIngredientsTags.push(event.target.textContent)
            showSelectedTags();

            toFilterRecipes(selectedIngredientsTags, selectedAppliancesTags, seclectedUstensilsTags);
        })


        listElement.appendChild(dropdownLinkElement);
        ingredientsTagsList.appendChild(listElement);
    })
}
//onclick replace text
dropdownMenuLinkBlue.addEventListener('click', function(event) {
    event.target.parentNode.classList.add('filter_select_research_blue');
    dropdownMenuLinkBlue.placeholder = 'Rechercher un ingrédient';
    const rafterRotation = document.getElementById('chevron_blue');
    rafterRotation.classList.add('fas-solid_rotate');
})

//replacer le dropdown ingredient
function textModifblue() {
    dropdownMenuLinkBlue.placeholder = "Ingredients";
    const Style = document.getElementById("filter_blue");
    Style.classList.remove('filter_select_research_blue');
    const rafterRotation = document.getElementById('chevron_blue');
    rafterRotation.classList.remove('fas-solid_rotate');
}

//input filter for ingredients
dropdownMenuLinkBlue.addEventListener('keyup', function(event) {
    if (event.target. /*(event.target remplace dropdownMenuLink */ value.length >= 3 /*pour récup la valeur tjs à jour*/ ) {
        const ingredientsTags = getAllIngredients(); /*stocké*/
        const filteredIngredientsTags = ingredientsTags.filter((ingredientTag) => ingredientTag.includes(event.target.value.toLowerCase()));
        displayIngredientsTagList(filteredIngredientsTags) /*rappelle de la fonction pour afficher la recherche*/
    } else if (event.target.value.length === 0) {
        displayIngredientsTagList(getAllIngredients());
    }
})


//appareils

function displayApplianceTagList(appliance) {
    const applianceTagsList = document.getElementById('applianceTagsList');
    applianceTagsList.innerHTML = "";
    appliance.forEach((appliance) => {
        const listElement = document.createElement('li');
        listElement.classList.add('dropdown-item');

        const dropdownLinkElement = document.createElement('a');
        dropdownLinkElement.textContent = appliance.toLowerCase();

        dropdownLinkElement.addEventListener('click', function(event) {
            selectedAppliancesTags.push(event.target.textContent);
            console.log(selectedAppliancesTags)
            showSelectedTags();

            toFilterRecipes(selectedIngredientsTags, selectedAppliancesTags, seclectedUstensilsTags);
        })

        listElement.appendChild(dropdownLinkElement);
        applianceTagsList.appendChild(listElement);
    })
}
//onclick replace text
dropdownMenuLinkGreen.addEventListener('click', function(event) {
    event.target.parentNode.classList.add('filter_select_research_green');
    dropdownMenuLinkGreen.placeholder = 'Rechercher un appareil';

    const rafterRotation = document.getElementById('chevron_green');
    rafterRotation.classList.add('fas-solid_rotate');
})

//replacer le dropdown appareilst
function textModifgreen() {
    dropdownMenuLinkGreen.placeholder = "appareils";
    const Style = document.getElementById("filter_green");
    Style.classList.remove('filter_select_research_green');
    const rafterRotation = document.getElementById('chevron_green');
    rafterRotation.classList.remove('fas-solid_rotate');
}

//input filter for appliance
dropdownMenuLinkGreen.addEventListener('keyup', function(event) {
    if (event.target. /*(event.target remplace dropdownMenuLink */ value.length >= 3 /*pour récup la valeur tjs à jour*/ ) {
        const applianceTags = getAllApliance(); /*stocké*/
        const filteredApplianceTags = applianceTags.filter((applianceTag) => applianceTag.includes(event.target.value.toLowerCase()));
        displayApplianceTagList(filteredApplianceTags) /*rappelle de la fonction pour afficher la recherche*/
    } else if (event.target.value.length === 0) {
        displayApplianceTagList(getAllApliance());
    }
})

//ustensils

function displayUstensilsTagList(ustensils) {
    const ustensilsTagsList = document.getElementById('ustensilsTagsList');
    ustensilsTagsList.innerHTML = "";
    ustensils.forEach((ustensil) => {
        const listElement = document.createElement('li');

        const dropdownLinkElement = document.createElement('a');
        dropdownLinkElement.classList.add('dropdown-item');
        dropdownLinkElement.textContent = ustensil.toLowerCase();
        dropdownLinkElement.addEventListener('click', function(event) {
            seclectedUstensilsTags.push(event.target.textContent)
            showSelectedTags();

            toFilterRecipes(selectedIngredientsTags, selectedAppliancesTags, seclectedUstensilsTags);
        })
        listElement.appendChild(dropdownLinkElement);
        ustensilsTagsList.appendChild(listElement);
    })
}

//onclick replace text
dropdownMenuLinkRed.addEventListener('click', function(event) {
        event.target.parentNode.classList.add('filter_select_research_red');
        dropdownMenuLinkRed.placeholder = 'Rechercher un ustensile';
        dropdownMenuLinkRed.classList.add('col-xs-4');;

        const rafterRotation = document.getElementById('chevron_red');
        rafterRotation.classList.add('fas-solid_rotate');
    })
    //replacer le dropdown appareilst
function textModifred() {
    dropdownMenuLinkRed.placeholder = "ustensils";
    const Style = document.getElementById("filter_red");
    Style.classList.remove('filter_select_research_red');
    const rafterRotation = document.getElementById('chevron_red');
    rafterRotation.classList.remove('fas-solid_rotate');
}


//input filter for ustensils
dropdownMenuLinkRed.addEventListener('keyup', function(event) {
    if (event.target. /*(event.target remplace dropdownMenuLink */ value.length >= 3 /*pour récup la valeur tjs à jour*/ ) {
        const ustensilsTags = getAllUstensils(); /*stocké*/
        const filteredUstensilsTags = ustensilsTags.filter((ustensilTag) => ustensilTag.includes(event.target.value.toLowerCase()));
        displayUstensilsTagList(filteredUstensilsTags) /*rappelle de la fonction pour afficher la recherche*/
    } else if (event.target.value.length === 0) {
        displayUstensilsTagList(getAllUstensils());
    }
})