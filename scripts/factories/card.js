function cardFactory(cardData) {
    //call data that we will use, stored in index.js
    const { name, ingredients, time, description, appliance, ustensils } = cardData;





    //create just one recipe
    function getRecipeCardDOM() {
        const recipeContainer = document.createElement('div');
        recipeContainer.classList.add('recipe_container');

        //two parts of the card
        const cardHead = document.createElement('div');
        cardHead.classList.add('card_head');
        recipeContainer.appendChild(cardHead);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card_body');
        recipeContainer.appendChild(cardBody);

        //inside the cardBody
        const cardTitle = document.createElement('div');
        cardTitle.classList.add('card_title');
        cardBody.appendChild(cardTitle);

        //name x time 
        const cardName = document.createElement('p');
        cardName.classList.add('card_name');
        cardName.textContent = name;
        cardTitle.appendChild(cardName);



        const cardTime = document.createElement('span');
        cardTime.setAttribute("class", 'card_time');

        const cardTimeImg = document.createElement('i');
        cardTimeImg.setAttribute("class", "fa-regular fa-clock");
        const cardTimeText = document.createElement('p');
        cardTimeText.textContent = `${time} min`;
        cardTime.appendChild(cardTimeImg);
        cardTime.appendChild(cardTimeText);
        cardTitle.appendChild(cardTime);

        //
        const cardDetails = document.createElement('div');
        cardDetails.classList.add('card_details');

        //ingredients x description
        const ingredientsList = document.createElement('ul');
        ingredientsList.classList.add('card_ingredients');

        ingredients.forEach((ingredient) => {
            const ingredientslistElement = document.createElement('li');
            ingredientslistElement.classList.add('filter_option');

            //ingredient
            const ingredientComponent = document.createElement('span');
            ingredientComponent.classList.add('filter_option_blod');
            ingredientComponent.textContent = `${ingredient.ingredient}${ingredient.quantity ? ":" : ""} `;

            //quantity x unit
            const quantityComponent = document.createElement('span');
            quantityComponent.textContent = `${ingredient.quantity ?? ""} ${ingredient.unit ?? ""}`;

            ingredientslistElement.appendChild(quantityComponent);
            ingredientslistElement.insertBefore(ingredientComponent, quantityComponent);

            ingredientsList.appendChild(ingredientslistElement);
        })

        cardDetails.appendChild(ingredientsList);

        const instruction = document.createElement('p');
        instruction.classList.add('card_description');
        instruction.textContent = description;

        cardDetails.appendChild(instruction);
        cardBody.appendChild(cardDetails);

        return (recipeContainer);

    }


    return { getRecipeCardDOM };

}