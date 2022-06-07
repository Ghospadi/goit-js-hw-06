const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listContainerEl = document.querySelector("ul#ingredients");
console.log(listContainerEl);

const list = [];

for (let ingredient of ingredients) {
  const ingredientEl = document.createElement("li");
  ingredientEl.classList = "item";
  ingredientEl.textContent = ingredient;

  list.push(ingredientEl);
}

listContainerEl.append(...list);
