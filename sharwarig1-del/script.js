const recipes = [
{
    name: "Vegetable Curry",
    ingredients: ["tomato", "onion", "potato", "carrot", "capsicum", "coriander"],
    items: [
        "1 onion, chopped",
        "2 tomatoes, chopped",
        "1 potato, diced",
        "1 carrot or capsicum, optional",
        "1 tablespoon oil",
        "Salt and spices to taste",
        "Fresh coriander, if available"
    ],
    steps: [
        "Wash and chop the vegetables.",
        "Heat oil in a pan and cook the onion until soft.",
        "Add tomatoes, salt and spices. Cook until the tomatoes soften.",
        "Add the remaining vegetables and mix well.",
        "Add a little water, cover and cook until the vegetables are tender.",
        "Garnish with coriander and serve hot with roti or rice."
    ],
    time: "25–35 minutes"
},
{
    name: "Vegetable Fried Rice",
    ingredients: ["rice", "carrot", "cabbage", "capsicum", "onion"],
    items: [
        "2 cups cooked rice",
        "1/2 cup chopped vegetables",
        "1 small onion, chopped",
        "1 tablespoon oil",
        "Salt and pepper to taste"
    ],
    steps: [
        "Use cooked rice that has been cooled and stored safely.",
        "Heat oil in a pan and sauté the onion.",
        "Add the chopped vegetables and stir-fry.",
        "Add rice, salt and pepper.",
        "Mix well and cook until steaming hot.",
        "Serve immediately."
    ],
    time: "15–20 minutes"
},
{
    name: "Bread Sandwich",
    ingredients: ["bread", "tomato", "onion", "capsicum"],
    items: [
        "4 slices of bread",
        "1 tomato, sliced",
        "1 small onion, sliced",
        "Capsicum, optional",
        "Butter or chutney, optional",
        "Salt and pepper"
    ],
    steps: [
        "Wash and slice the vegetables.",
        "Spread butter or chutney on the bread if desired.",
        "Place vegetables on two bread slices.",
        "Sprinkle salt and pepper.",
        "Cover with the remaining bread slices.",
        "Serve fresh or toast until golden."
    ],
    time: "10 minutes"
},
{
    name: "Aloo Paratha",
    ingredients: ["potato", "wheat", "onion", "coriander"],
    items: [
        "2 boiled potatoes",
        "1 cup wheat flour",
        "1 small onion, optional",
        "Coriander, if available",
        "Salt and spices",
        "Water and oil"
    ],
    steps: [
        "Mash the boiled potatoes.",
        "Mix in onion, coriander, salt and spices.",
        "Add water to wheat flour and knead into a soft dough.",
        "Divide the dough into balls and flatten them.",
        "Fill each ball with potato mixture and seal.",
        "Roll gently into a flat paratha.",
        "Cook on a hot pan with a little oil until both sides are golden."
    ],
    time: "25–35 minutes"
},
{
    name: "Vegetable Egg Bhurji",
    ingredients: ["egg", "onion", "tomato", "capsicum"],
    items: [
        "2 eggs",
        "1 small onion, chopped",
        "1 tomato, chopped",
        "Capsicum, optional",
        "1 teaspoon oil",
        "Salt and spices"
    ],
    steps: [
        "Beat the eggs in a bowl.",
        "Heat oil and sauté the onion.",
        "Add tomato, capsicum and spices.",
        "Cook until the vegetables soften.",
        "Add the eggs and stir until fully cooked.",
        "Serve hot with bread or roti."
    ],
    time: "10–15 minutes"
},
{
    name: "Spinach Curry",
    ingredients: ["spinach", "onion", "tomato", "coriander"],
    items: [
        "2 cups washed spinach",
        "1 small onion, chopped",
        "1 tomato, chopped",
        "1 tablespoon oil",
        "Salt and spices"
    ],
    steps: [
        "Wash and chop the spinach.",
        "Heat oil and sauté the onion.",
        "Add tomato, salt and spices.",
        "Cook until the tomato softens.",
        "Add spinach and mix well.",
        "Cover and cook until tender.",
        "Serve with rice or roti."
    ],
    time: "15–20 minutes"
},
{
    name: "Paneer Bhurji",
    ingredients: ["paneer", "onion", "tomato", "capsicum"],
    items: [
        "200 g paneer, crumbled",
        "1 small onion, chopped",
        "1 tomato, chopped",
        "Capsicum, optional",
        "1 tablespoon oil",
        "Salt and spices"
    ],
    steps: [
        "Crumble the paneer.",
        "Heat oil and sauté the onion.",
        "Add tomato, capsicum and spices.",
        "Cook until the vegetables soften.",
        "Add paneer and mix gently.",
        "Cook until hot throughout.",
        "Serve with roti or bread."
    ],
    time: "15 minutes"
},
{
    name: "Mixed Vegetable Stir-Fry",
    ingredients: ["carrot", "cabbage", "capsicum", "onion"],
    items: [
        "1–2 cups chopped vegetables",
        "1 small onion",
        "1 tablespoon oil",
        "Salt and pepper"
    ],
    steps: [
        "Wash and slice the vegetables.",
        "Heat oil in a pan.",
        "Add onion and cook until soft.",
        "Add the remaining vegetables.",
        "Stir-fry until tender.",
        "Season with salt and pepper and serve hot."
    ],
    time: "10–15 minutes"
},
{
    name: "Roti",
    ingredients: ["wheat"],
    items: [
        "1 cup wheat flour",
        "Water as needed",
        "Extra flour for rolling"
    ],
    steps: [
        "Place wheat flour in a bowl.",
        "Add water gradually and knead into a soft dough.",
        "Cover and rest for 10 minutes.",
        "Divide into small balls.",
        "Roll each ball into a thin circle.",
        "Cook on a hot pan, flipping until both sides are cooked.",
        "Serve warm."
    ],
    time: "20 minutes"
},
{
    name: "Milk Porridge",
    ingredients: ["milk", "wheat"],
    items: [
        "2 cups milk",
        "2 tablespoons wheat flour",
        "Sugar, optional"
    ],
    steps: [
        "Mix wheat flour with a little cool milk to make a smooth paste.",
        "Warm the remaining milk in a saucepan.",
        "Gradually add the paste while stirring.",
        "Cook over low heat, stirring until thick and the flour is cooked.",
        "Add sugar if desired.",
        "Cool to a safe eating temperature before serving."
    ],
    time: "10–15 minutes"
}
];

const form = document.getElementById("ingredientForm");
const results = document.getElementById("results");
const recipeSection = document.getElementById("recipeSection");
const procedure = document.getElementById("procedure");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const selected = Array.from(
        document.querySelectorAll('input[name="ingredient"]:checked')
    ).map(function(input) {
        return input.value;
    });

    results.innerHTML = "";
    recipeSection.hidden = true;

    if (selected.length === 0) {
        results.innerHTML = "<h3>Please select at least one ingredient.</h3>";
        return;
    }

    const matchingRecipes = recipes.filter(function(recipe) {
        return recipe.ingredients.some(function(ingredient) {
            return selected.includes(ingredient);
        });
    });

    if (matchingRecipes.length === 0) {
        results.innerHTML = "<p>No matching recipes found.</p>";
        return;
    }

    const heading = document.createElement("h3");
    heading.textContent = "Recipes You Can Make";
    results.appendChild(heading);

    const message = document.createElement("p");
    message.textContent = "Click a recipe name to view its full procedure.";
    results.appendChild(message);

    matchingRecipes.forEach(function(recipe) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "recipe-button";
        button.textContent = recipe.name + " →";

        button.addEventListener("click", function() {
            showRecipe(recipe);
        });

        results.appendChild(button);
    });
});

function showRecipe(recipe) {
    procedure.innerHTML = "";

    const title = document.createElement("h2");
    title.textContent = recipe.name;

    const time = document.createElement("p");
    time.textContent = "Cooking time: " + recipe.time;

    const ingredientsHeading = document.createElement("h3");
    ingredientsHeading.textContent = "Ingredients Required";

    const ingredientsList = document.createElement("ul");

    recipe.items.forEach(function(item) {
        const li = document.createElement("li");
        li.textContent = item;
        ingredientsList.appendChild(li);
    });

    const stepsHeading = document.createElement("h3");
    stepsHeading.textContent = "Step-by-Step Procedure";

    const stepsList = document.createElement("ol");

    recipe.steps.forEach(function(step) {
        const li = document.createElement("li");
        li.textContent = step;
        stepsList.appendChild(li);
    });

    procedure.appendChild(title);
    procedure.appendChild(time);
    procedure.appendChild(ingredientsHeading);
    procedure.appendChild(ingredientsList);
    procedure.appendChild(stepsHeading);
    procedure.appendChild(stepsList);

    recipeSection.hidden = false;
    recipeSection.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("backButton").addEventListener("click", function() {
    recipeSection.hidden = true;
    results.scrollIntoView({ behavior: "smooth" });
});
