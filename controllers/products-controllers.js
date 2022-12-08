import { productServices } from "../services/product-services.js";

const newProduct = (name, price, imageUrl) => {

    const card = document.createElement("div");
    const content = `
        <div>
            <img src="${imageUrl}" alt="">
            <h5>${name}</h5>
            <p>${price}</p>
            <a href="product-info.html">Ver producto</a>
        </div>
    `

    card.innerHTML = content;
    card.classList.add("products");
    return card;
}

const product = document.querySelector("[data-product]");

const render = async () => {
    try {
        const productList = await productServices.productList();
        productList.forEach(element => {
            product.appendChild(newProduct(element.name, element.price, element.imageUrl));
        });
    }
    catch(error) {
        console.log(error);
    }
}

render();