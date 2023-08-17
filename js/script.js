const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMessage = document.getElementById("message");

const contactItemName = document.querySelector(".contact-item-name");
const contactItemEmail = document.querySelector(".contact-item-email");
const contactItemMessage = document.querySelector(".contact-item-message");

const btnFormSubmit = document.querySelector(".js-submit-btn");

function validateEmail(element) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(element.value.trim());
}

function validateName(element) {
  return element.value.trim().length >= 3;
}

function validateMessage(element) {
  return element.value.trim().length >= 10;
}

function setValidationStatus(element, validator) {
  const inputEl = element.querySelector(".input-el");

  if (!validator(inputEl)) {
    element.querySelector(".js-err-box").classList.remove("hidden");
    element.querySelector(".js-err-msg").classList.remove("hidden");
    element.querySelector(".js-input-box").classList.add("border-red-600");
  } else {
    element.querySelector(".js-input-box").classList.add("border-themeGreen");
  }
}

function clearValidationStatus(element) {
  element.querySelector(".js-err-box").classList.add("hidden");
  element.querySelector(".js-err-msg").classList.add("hidden");
  element.querySelector(".js-input-box").classList.remove("border-red-600");
  element.querySelector(".js-input-box").classList.remove("border-themeGreen");
}

const onFormSubmit = function (e) {
  e.preventDefault();
  setValidationStatus(contactItemName, validateName);
  setValidationStatus(contactItemEmail, validateEmail);
  setValidationStatus(contactItemMessage, validateMessage);
};

btnFormSubmit.addEventListener("click", onFormSubmit);

inputName.addEventListener("input", () =>
  clearValidationStatus(contactItemName)
);
inputEmail.addEventListener("input", () =>
  clearValidationStatus(contactItemEmail)
);
inputMessage.addEventListener("input", () =>
  clearValidationStatus(contactItemMessage)
);
