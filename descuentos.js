

/*console.log({
    precioOriginal,
    descuento,
    procentajeDelPrecioConDescuento,
    precioConDescuento
});*/

function calcularPrecioConDescuento(precioOriginal, descuento){
    const procentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * (procentajeDelPrecioConDescuento / 100));
    return precioConDescuento;
}

function onclickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = parseFloat(inputPrice.value);
    const inputDescuento = document.getElementById("InputDescuento");
    const priceDiscount = parseFloat(inputDescuento.value);
    const precioConDescuento = calcularPrecioConDescuento(priceValue,priceDiscount);
    const getElementById = document.getElementById("ResultP");
    getElementById.innerText =  "El precio con descuento es: $" + precioConDescuento;
}

