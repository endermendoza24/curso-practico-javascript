
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


const lista1 = [
    100,
    200,
    500,
 
    400000000,
];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar (numerito){
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

if(esPar(lista1.length)){
    const elemento1 = lista1[mita1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElementos1y2 = calcularMediAritmetica([
        elemento1,
        elemento2
    ]);

    mediana = promedioElementos1y2

}else{
    mediana = lista1[mitadLista1];
}