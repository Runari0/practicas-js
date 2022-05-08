// function invertirArregloProceso(arreglo, indice, cadena){
//     return indice == 0 ? cadena : invertirArregloProceso(arreglo, --indice, (cadena += " " + arreglo[indice]));
// }


function invertirArregloProceso(arreglo, indice, cadena){
    if (indice == 0){
        return cadena;
    }else{
        return invertirArregloProceso(arreglo, --indice, (cadena += " " + arreglo[indice]));
    }
}

function invertirArreglo(nombres){
let resultado = invertirArregloProceso(nombres, nombres.length, ``);
console.log(resultado)
}

invertirArreglo(["ana","maria","luis","z"])


