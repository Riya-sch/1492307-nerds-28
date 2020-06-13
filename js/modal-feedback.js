

var modalLink = document.querySelector(".contact-info-button");
var modalFeedback = document.querySelector(".modal-feedback");
var modalClose = document.querySelector(".close-button");

modalLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add("modal-active");
});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-active");
});
  
