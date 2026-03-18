const popup = document.querySelector(".popup");
const submitButton = document.querySelector(".submitButton");
const closeButton = document.querySelector(".closeButton");

function openPopup() {
  popup.classList.add("openPopupClass");
}

function closePopup() {
  popup.classList.remove("openPopupClass");
}

// display popup when "Submit" button is clicked
submitButton.addEventListener("click", openPopup);

// hide popup when "Ok" button is clicked
closeButton.addEventListener("click", closePopup);