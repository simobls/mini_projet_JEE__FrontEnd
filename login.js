function switchForms(activeForm, inactiveForm) {
    activeForm.classList.toggle("hide");
    inactiveForm.classList.toggle("hide");
}

const sign_button = document.getElementById("sign");
const log_button = document.getElementById("log");
const clickme_button = document.getElementById("clickme");
const sign = document.querySelector(".signup");
const log = document.querySelector(".login");

sign_button.addEventListener("click", () => {
    event.preventDefault();
    switchForms(sign, log);
});

log_button.addEventListener("click", () => {
    event.preventDefault();
    switchForms(log, sign);
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const hideLogin = urlParams.get('hideLogin');

    const sign = document.querySelector(".signup");
    const log = document.querySelector(".login");

    if (hideLogin === "true") {
        sign.classList.remove("hide");
        log.classList.add("hide");
    }
    else if (hideLogin === "false") {
        sign.classList.add("hide");
        log.classList.remove("hide");
    }
});