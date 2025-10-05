let recipes = [];
// Load dataset from recipes.json
fetch("recipes_with_procedure.json")
  .then(response => response.json())
  .then(data => {
    recipes = data;
    console.log(" Recipes loaded:", recipes.length);
  })
  .catch(error => console.error(" Error loading recipes:", error));

// DOM elements
const ingredientInput = document.getElementById("ingredientInput");
const findRecipesBtn = document.getElementById("findRecipesBtn");
const resultsDiv = document.getElementById("results");

// Function: Display recipes
function displayRecipes(recipeList) {
  resultsDiv.innerHTML = ""; // Clear previous results

  if (recipeList.length === 0) {
    resultsDiv.innerHTML = "<p> No recipes found with those ingredients.</p>";
    return;
  }

  recipeList.forEach(recipe => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    recipeCard.innerHTML = `
      <h3>${recipe.name}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <p><strong>Recipe Name:</strong> ${recipe.name}</p>
      <p><strong>Diet:</strong> ${recipe.diet}</p>
      <p><strong>Prep time:</strong> ${recipe.prep_time}</p>
      <p><strong>Cook time:</strong> ${recipe.cook_time}</p>
      <p><strong>Dish Type:</strong> ${recipe.flavor_profile}</p>
      <p><strong>Cooking Instructions:</strong> ${recipe.procedure}</p>

    `;

    resultsDiv.appendChild(recipeCard);
  });
}

// Function: Find recipes based on ingredients
findRecipesBtn.addEventListener("click", () => {
  const userInput = ingredientInput.value.trim();

  if (!userInput) {
    alert(" Please enter at least one ingredient!");
    return;
  }

  const userIngredients = userInput
    .toLowerCase()
    .split(",")
    .map(i => i.trim());

  // Match if at least one ingredient matches
  const matchedRecipes = recipes.filter(recipe => {
    let recipeIngs = recipe.ingredients
      .toLowerCase()
      .split(",")
      .map(i => i.trim());

    return userIngredients.some(ing => recipeIngs.includes(ing));
  });

  // Show results
  displayRecipes(matchedRecipes);
});