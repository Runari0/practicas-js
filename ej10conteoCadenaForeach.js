// function recorridoArreglo(valor, indice, lenguajes) {
//     console.log(`${valor} se encuentra en el índice ${indice}`);
    
// }
// function recorrido(cadena){
//     cadena.forEach(recorridoArreglo);
// }

// recorrido(["ana","karen",])


function conteo(n){
    let lenguajes = n;
lenguajes.forEach(function(valor, indice, lenguajes) {
    console.log(`${valor} se encuentra en el índice ${indice}`);
});
}

conteo(["ana","karen","lol"])
