const liElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${liElements.length}`);

liElements.forEach((el) => {
  console.log(`Catregory: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
