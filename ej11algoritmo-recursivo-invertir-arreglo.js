// invertir arreglo con un algoritmo recursivo
//forma 1
function invertirArregloProceso(arreglo, indice, cadena){
    return indice == 0 ? cadena : invertirArregloProceso(arreglo, --indice, (cadena += " " + arreglo[indice]));
}
function invertirArreglo(nombres){
    let resultado = invertirArregloProceso(nombres, nombres.length, ``);
    console.log(resultado);
}
invertirArreglo(["ana","maria","luis","z"]);
console.log();
//forma 2
function invertirArregloProceso2(arreglo, indice, cadena){
    if (indice == 0){
        return cadena;
    }else{
        return invertirArregloProceso2(arreglo, --indice, (cadena += " " + arreglo[indice]));
    }
}
function invertirArreglo2(nombres){
    let resultado = invertirArregloProceso2(nombres, nombres.length, ``);
    console.log(resultado);
}
invertirArreglo2(["ana","maria","luis","z"]);
