// parse the amount string to a number:
function parseFloatElement(id){
    const getElement = document.getElementById(id);
    const parseElementFloat = parseFloat(getElement.innerText);
    return parseElementFloat;
}
// to fixed the decimal number after the point:
function toFixedElementInnerText(id, subtractionTotal){
    const totalElement = document.getElementById(id);
    totalElement.innerText = subtractionTotal.toFixed(2);
}

// remover the attribute to the button:
function buttonRemoveAttribute(id){
    const removeBtn = document.getElementById(id);
    removeBtn.removeAttribute('disabled');
}