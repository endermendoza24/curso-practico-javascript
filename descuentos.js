// const precioOriginal = 100;
// const descuento = 15;


const calcularPrecioDescuento = (precio,descuento)=>{
    const porcentajePrecioConDescuento = descuento - 100;

const precioConDescuento = ( precio * porcentajePrecioConDescuento ) / 100;

return precioConDescuento;
}

const calcularPrecioConDescuento = (precio, descuento) => {
    let porcentajePrecioConDescuento = 
}




const onClickButtonPriceDiscount =() =>{
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("inputPrice");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");

    resultP.innerText = `El precio con descuento es: $ ${precioConDescuento}`
}



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });