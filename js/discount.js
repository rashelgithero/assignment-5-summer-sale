function discount(price){
    const fieldValue = document.getElementById('discount');
    document.getElementById('apply-button').addEventListener('click', function(){
        // calculate the discount price:
        if(fieldValue.value === 'SELL200' && price >= 200){
            // use toFixed to use the  decimal price:
            const discount = (price* 20 / 100)
            toFixedElementInnerText('showDiscount', discount);
            fieldValue.value = '';
            // parseFloat the discount element innerText:
            const discountPrice = parseFloatElement('showDiscount');
            const subtractionTotal = price - discountPrice;

            // calculate the total price  after subtraction the discount:
            toFixedElementInnerText('total', subtractionTotal);
        }
    })
}
