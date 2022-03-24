const lista1 = [
    100,
    200,
    300, 
    500
];




function calcularMediAritmetica(lista){

// let sumaLista = 0;

// for(let i = 0; i < lista1.length; i++){
//     sumaLista1 = sumaLista + lista1[i];
// }

const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    }
);

const promedioLista = sumaLista / lista1.length;
return promedioLista; 
}