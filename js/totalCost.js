
function totalCost(clickedProduct){
    // this is the total price of the product :
    const price = totalPrice(clickedProduct);
    toFixedElementInnerText('total-price', price);

    //send the total amount to subtraction the discount;
    discount(price);

    // this is the final price of the product which were bought:
    const discountPrice = parseFloatElement('showDiscount');
    const subtractionTotal = price - discountPrice;
    toFixedElementInnerText('total', subtractionTotal);

    // enable the purchase button:
    if(price >= 200){
        // enable the purchase button :
        buttonRemoveAttribute('purchase-btn');
        // enable the purchase button:
        buttonRemoveAttribute('apply-button');
    }

}

