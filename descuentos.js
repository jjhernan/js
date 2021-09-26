

/*console.log({
    precioOriginal,
    descuento,
    procentajeDelPrecioConDescuento,
    precioConDescuento
});*/

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto"
];


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

function onclickButtonPriceCoupon(){
    let descuento;
    const inputPrice = document.getElementById("InputPriceCupon");
    const priceValue = parseFloat(inputPrice.value);
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    
    console.log(couponValue);
    
    
    /*switch(couponValue){
        case coupons[0]:
            descuento = 15;
        break;  
        case coupons[1]:
            descuento = 25;
        break; 
        case coupons[2]:
            descuento = 30;
        break; 
        
    }*/

    if(!coupons.includes(couponValue)){
        alert("¡Ups! Cupón " + couponValue + " no válido");
    } else if (couponValue === "JuanDC_es_Batman"){
        descuento = 15;
    } else if (couponValue === "pero_no_le_digas_a_nadie"){
        descuento = 25;

    } else if (couponValue === "es_un_secreto"){
        descuento = 30;
    }

    
    const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
    const ResultPC = document.getElementById("ResultPC");
    ResultPC.innerText =  "El precio con descuento de cupon es: $" + precioConDescuento;
}

