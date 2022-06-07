const inputEl = document.querySelector("input#name-input");
const outputEl = document.querySelector("span#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange() {
  outputEl.textContent = inputEl.value !== "" ? inputEl.value : "Anonymous";
}
