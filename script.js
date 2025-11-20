const ingredientsLists= [
    "Dragon Scale",
    "Phoenix Feather",
    "Unicorn Horn",
];

document.getElementById("generateButton").addEventListener("click",generateSpell);

function generateSpell() {
  const randomIndex = Math.floor(Math.random() * ingredientsList.length);
  const randomIngredient = ingredientsList[randomIndex];

  // Show in spellArea
  document.getElementById("spellArea").textContent = randomIngredient;
}

function generateSpell() {
  // 1. Pick random ingredient
  const randomIndex = Math.floor(Math.random() * ingredientsList.length);
  const randomIngredient = ingredientsList[randomIndex];

  // 2. Put the ingredient into spellArea
  document.getElementById("spellArea").textContent = randomIngredient;

  // 3. Create random color
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // 4. Change spellArea's background color using .style
  document.getElementById("spellArea").style.backgroundColor = randomColor;
}

function generateSpell() {
  const spellArea = document.getElementById("spellArea");

  let counter = 3;

  spellArea.textContent = counter;

  const countdownInterval = setInterval(() => {
    counter--;               
    spellArea.textContent = counter;  

    // When countdown reaches 0 → stop counting and show spell
    if (counter === 0) {
      clearInterval(countdownInterval);

      // ---- Select a random ingredient ----
      const randomIndex = Math.floor(Math.random() * ingredientsList.length);
      const randomIngredient = ingredientsList[randomIndex];

      // ---- Display the final spell ----
      spellArea.textContent = randomIngredient;

      // ---- Change background color ----
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      spellArea.style.backgroundColor = randomColor;
    }
  }, 1000); // 1000ms = 1 second
}

document.getElementById("resetButton").addEventListener("click", resetSpellArea);

function resetSpellArea() {
  const spellArea = document.getElementById("spellArea");

  // Clear text
  spellArea.textContent = "";

  // Reset background color
  spellArea.style.backgroundColor = "";

  // (Optional) Reset any other styles you changed earlier
}