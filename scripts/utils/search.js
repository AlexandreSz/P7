const searchInput = document.querySelector('#searchBar');
const searchResult = document.getElementById("recipesContainer");
searchInput.addEventListener("input", filterData);



function filterData(e) {
    const searchString = e.target.value.toLowerCase();

    if (searchString.length >= 3) {
        searchResult.innerHTML = "";
        const filteredArr = recipes.filter(el => {
            if (el.name.toLowerCase().includes(searchString) || el.description.toLowerCase().includes(searchString)) {
                return true;
            }
            const filteredIng = el.ingredients.filter(ingredient => ingredient.ingredient.toLowerCase().includes(searchString))

            if (filteredIng.length > 0) {
                return true;
            }
            return false;
        });
        // console.log(filteredArr)
        displayData(filteredArr)
        displayTagLists(filteredArr)

        if (filteredArr.length < 1) {
            searchResult.innerHTML = "Aucunes recettes ne correspond à la recherche"
        }
    } else {
        displayData(recipes)
    }
}