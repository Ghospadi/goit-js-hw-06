const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onFocusLost);

function onFocusLost() {
  if (inputEl.value.length >= inputEl.dataset.length) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}

// function onFocusLost() {
//   inputEl.value.length >= inputEl.dataset.length
//     ? inputEl.classList.add("valid")
//     : inputEl.classList.add("invalid");
// }
