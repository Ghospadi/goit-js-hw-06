const decrementButton = document.querySelector('[data-action="increment"]');
const incrementButton = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

decrementButton.addEventListener("click", onDecrementButtonClick);

incrementButton.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
  counterValue++;
  valueEl.textContent = counterValue;
}

function onIncrementButtonClick() {
  counterValue--;
  valueEl.textContent = counterValue;
}
