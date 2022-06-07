const inputEl = document.querySelector("input#name-input");
const outputEl = document.querySelector("span#name-output");

inputEl.addEventListener("input", onInputChange);

function onInputChange() {
  inputEl.value !== ""
    ? (outputEl.textContent = inputEl.value)
    : (outputEl.textContent = "Anonymous");
}
