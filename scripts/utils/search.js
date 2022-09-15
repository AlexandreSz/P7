const searchInput = document.querySelector('#searchBar');
const searchResult = document.getElementById("recipesContainer");
searchInput.addEventListener("input", filterData);

function filterData(e) {
    searchResult.innerHTML = "";
    const searchString = e.target.value.toLowerCase();

    const filteredArr = recipes.filter(el => el.name.toLowerCase().includes(searchString) || el.description.toLowerCase().includes(searchString));

    console.log(filteredArr)

    displayData(filteredArr)
    if (filteredArr.length < 1) {
        searchResult.innerHTML = "Aucunes recettes ne correspond à la recherche"
    }
}