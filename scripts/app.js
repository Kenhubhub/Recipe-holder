//initial objects and dom-queries
const card_section = document.querySelector("#cards");
const cardUI = new UI(card_section);
const recipe_database = new Recipes();
//Event listeners
//Pressing add ingredient will add an input field above.

recipe_database.getRecipes((data,id)=>{
    cardUI.add_card(data,id);
})