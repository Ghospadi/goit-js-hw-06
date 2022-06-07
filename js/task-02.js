const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listContainerEl = document.querySelector("ul#ingredients");

const list = [];

for (let ingredient of ingredients) {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = ingredient;

  list.push(element);
}

console.log(list);

listContainerEl.append(...list);
