var modalOpen = document.querySelector(".contact-info-button");
var modalFeedback = document.querySelector(".modal-feedback");
var modalClose = modalFeedback.querySelector(".close-button");
var modalForm = modalFeedback.querySelector(".feedback-form");
var modalLogin = modalFeedback.querySelector("[name=name]");
var modalEmail = modalFeedback.querySelector("[name=email]");
var modalMessage = modalFeedback.querySelector("[name=message]");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

modalOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.add("modal-active");
    modalLogin.focus();

    if (storageName) {
        modalLogin.value = storageName;
        modalEmail.focus();
    } else {
        modalLogin.focus();
    }
    if (storageEmail) {
        modalEmail.value = storageEmail;
        modalMessage.focus();
    }

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

modalClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-active");
    modalFeedback.classList.remove("modal-error");
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