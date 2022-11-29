// Capturo los inputs del form
window.addEventListener("load", () => {
    const form = document.querySelector(".form");
    const name = document.querySelector(".input__form");
    const textarea = document.querySelector(".textarea__form");
    const btnSend = document.querySelector(".btn__send");


    // Con esta función evito que la página se recargue
    form.addEventListener("submit", (reload) => {
        reload.preventDefault();
        validateInputs();
    });

    const validateInputs = () => {
        const nameValue = name.value.trim();
        console.log(nameValue);
        const textareaValue = textarea.value.trim();
        console.log(textareaValue);

        if (nameValue === ""){
            console.log("campo vacío");
            validateFail(name, "Campo vacío");
        } else {
            validateOk(name);
        };

        if (textareaValue === "") {
            console.log("campo vacío");
            validateFail(textarea, "Campo vacío, por favor escriba su mensaje");
        } else {
            validateOk(textarea);
        };
    };

    const validateFail = (input, message) => {
        const form = input.parentElement;
        const notice = form.querySelector("p");
        notice.innerText = message;

        form.className = "form__container fail";
    };

    const validateOk = (input) => {
        const form = input.parentElement;
        form.className = "form__container ok"
    };

});
