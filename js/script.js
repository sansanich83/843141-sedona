var hidebutton = document.querySelector(".form-title");
var formtoggle = document.querySelector(".search-form");

hidebutton.addEventListener("click", function (evt) {
  evt.preventDefault();
  formtoggle.classList.toggle("hide-form");
});
