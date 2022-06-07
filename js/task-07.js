const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

rangeEl.addEventListener("click", onChangeRange);

function onChangeRange() {
  textEl.style.fontSize = `${rangeEl.value}px`;
}
