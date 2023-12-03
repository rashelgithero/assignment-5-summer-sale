const products =document.getElementsByClassName('product');
for (const product of products) {
    product.addEventListener('click', function (){
        const clickedProduct = this;
        showProduct(clickedProduct);
        totalCost(clickedProduct);
    })
}