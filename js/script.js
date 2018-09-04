var hidebutton = document.querySelector(".form-title");
var formtoggle = document.querySelector(".search-form");


hidebutton.addEventListener("click", function (evt) {
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