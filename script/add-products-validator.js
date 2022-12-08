
window.addEventListener("load", () => {
    const form = document.querySelector(".product__form");
    const imageUrl = document.querySelector(".input__url");
    const category = document.querySelector(".input__category");
    const productName = document.querySelector(".input__product-name");
    const price = document.querySelector(".input__price");
    const description = document.querySelector(".textarea");

    form.addEventListener("submit", (reload) => {
        reload.preventDefault();
        validateInputs();
    });

    const validateInputs = () => {
        const imageUrlValue = imageUrl.value.trim();
        const categoryValue = category.value.trim();
        const productNameValue = productName.value.trim();
        const priceValue = price.value.trim();
        const descriptionValue = description.value.trim();

        //Compruebo el campo url
        if (imageUrlValue === "") {
            console.log("1 fail");
            validateFail(imageUrl, "Campo vacío");
        } else {
            console.log("1 ok")
            validateOk(imageUrl);
        };

        //Compruebo el campo categoría
        if (categoryValue === "") {
            console.log("2 fail");
            validateFail(category, "Campo vacío");
        } else {
            console.log("2 Ok")
            validateOk(category);
        };

        //Compruebo el campo nombre del producto
        if ( productNameValue === "") {
            console.log("3 fail");
            validateFail(productName, "Campo vacío")
        } else {
            console.log("3 ok");
            validateOk(productName);
        };

        //Compruebo el campo precio
        if (priceValue === "") {
            console.log("4 fail");
            validateFail(price, "Campo Vacío");
        } else {
            console.log("4 ok");
            validateOk(price);
        };

        if (descriptionValue === "") {
            console.log("5 fail");
            validateFail(description, "Campo vacío");
        } else {
            console.log("5 ok");
            validateOk(description);
        };
    }

    const validateOk = (input) => {
        const form = input.parentElement;
        form.className = "product__form ok";
    };

    const validateFail = (input, message) => {
        const form = input.parentElement;
        const notice = form.querySelector("p");
        notice.innerText = message;

        form.className = "product__form fail";
    }
})