function showProduct(product){
    // get the product name from the product section

    const clickedProductName = product.children[2].innerText;
    // set the product name in the cart show area
    const productNameArea = document.getElementById('product-name');
    productNameArea.style.marginBottom = '30px';
    const count = productNameArea.childElementCount;
    const h3 = document.createElement('h3');
    h3.innerHTML =`<p class = "mb-2 text-lg font-medium">${count + 1}. ${clickedProductName} </p>`;
    productNameArea.appendChild(h3);
}
function totalPrice(product){
    const productPriceString = product.children[3].children[0].innerText;
    const productPrice = parseFloat(productPriceString);
    const previousPrice = parseFloatElement('total-price');
    const finalPrice = previousPrice + productPrice;
    return finalPrice;
}