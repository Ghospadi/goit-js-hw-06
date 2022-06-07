function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesCollectionEl = document.querySelector("div#boxes");
const numberEl = document.querySelector("input");
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");

let size = 30;
let boxesArray = [];

createEl.addEventListener("click", onCreateBtn);
destroyEl.addEventListener("click", onDestroyBtn);

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    let element = document.createElement("div");
    element.classList.add("box");

    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    size += 10;
    element.style.backgroundColor = `${getRandomHexColor()}`;

    boxesArray.push(element);
  }
}

function onCreateBtn() {
  createBoxes(numberEl.value);
  boxesCollectionEl.append(...boxesArray);
  numberEl.value = 0;
  boxesArray = [];
  size = 30;
}

function onDestroyBtn() {
  // const elements = document.querySelectorAll(".box");
  // for (let element of elements) {
  //   element.remove();
  // }
  boxesCollectionEl.innerHTML = "";
}
