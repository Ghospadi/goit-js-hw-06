const emailEl = document.querySelector("[type=email]");
const passwordEl = document.querySelector("[type=password]");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (emailEl.value === "" || passwordEl.value === "") {
    alert("Please complete all fields");
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);
  event.currentTarget.reset();
}
