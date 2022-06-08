const emailEl = document.querySelector("[type=email]");
const passwordEl = document.querySelector("[type=password]");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value.trim();
  if (emailEl.value.trim() === "" || passwordEl.value.trim() === "") {
     return alert("Please complete all fields");
  }

  const Data = { email, password };
  console.log(Data);
  event.currentTarget.reset();
}
