
var modalLink = document.querySelector(".contact-info-button");
var modalFeedback = document.querySelector(".modal-feedback");
var modalClose = document.querySelector(".close-button");
var modalForm = modalFeedback.querySelector(".feedback-form");
var modalLogin = modalFeedback.querySelector("[name=name]");
var modalEmail = modalFeedback.querySelector("[name=email]");
var modalMessage = modalFeedback.querySelector("[name=message]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("name");
}   catch (err) {
    isStorageSupport = false;
}

modalLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add("modal-active");
    modalLogin.focus();

    if (storage) {
        modalLogin.value = storage;
        modalEmail.focus();
    } else {
        modalLogin.focus();
    }
    modalPassword.focus();
    if (storage) {
        modalPassword.value = storage;
        modalMessage.focus();
    } else {
        modalEmail.focus();
    }

});

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-active");
    modalFeedback.classList.remove("modal-error");
});
  
modalForm.addEventListener("submit", function (evt) {
    if (!modalLogin.value || !modalEmail.value || !modalMessage.value) {
        evt.preventDefault();
        modalFeedback.classList.remove("modal-error");
        modalFeedback.offsetWidth = modalFeedback.offsetWidth;
        modalFeedback.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", modalLogin.value);
            localStorage.setItem("email", modalEmail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalFeedback.classList.contains("modal-active")) {
            evt.preventDefault();
            modalFeedback.classList.remove("modal-active");
            modalFeedback.classList.remove("modal-error");
        }
    }
});