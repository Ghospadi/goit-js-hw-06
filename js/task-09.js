function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnEl = document.querySelector("button.change-color");
const colorNameEl = document.querySelector("span.color");

changeColorBtnEl.addEventListener("click", onColorChange);

function onColorChange() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = `${color}`;
  colorNameEl.textContent = `${color}`;
}
