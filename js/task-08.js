const emailEl = document.querySelector("[type=email]");
const passwordEl = document.querySelector("[type=password]");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  console.log(formElements);
  const email = formElements.email.value;
  console.log(email);
  const password = formElements.password.value;
  console.log(password);
  if (emailEl.value === "" || passwordEl.value === "") {
    alert("Please complete all fields");
  }

  const Data = {
    email,
    password,
  };
  console.log(Data);
  event.currentTarget.reset();
}
