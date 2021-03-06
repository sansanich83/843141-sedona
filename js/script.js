var hidebutton = document.querySelector(".form-title");
var formtoggle = document.querySelector(".search-form");
var adultsNumber = document.querySelector(".input-adults");
var childsNumber = document.querySelector(".input-childs");
var arrivalDate = document.querySelector("[name=arrival-date]");
var departureDate = document.querySelector("[name=departure-date]");

hidebutton.addEventListener("click", function(evt) {
  evt.preventDefault();
  formtoggle.classList.toggle("search-form-show");
});

function changePeoplesNumber(e) {
  console.log(e.id);
  var inputAdults = document.getElementById("adults-number");
  if (e.id === "button-minus-adults" && inputAdults.value > 0) {
    inputAdults.value--;
  }
  if (e.id === "button-plus-adults") {
    inputAdults.value++;
  }
  var inputChilds = document.getElementById("childs-number");
  if (e.id === "button-minus-childs" && inputChilds.value > 0) {
    inputChilds.value--;
  }
  if (e.id === "button-plus-childs") {
    inputChilds.value++;
  }
}
formtoggle.addEventListener("submit", function(evt) {
  if (adultsNumber.value == 0 && childsNumber.value == 0) {
    evt.preventDefault();
    formtoggle.classList.toggle("search-error");
  }
  if (!arrivalDate.value || !departureDate.value) {
    evt.preventDefault();
    formtoggle.classList.toggle("search-error");
  }
});
