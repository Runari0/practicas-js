//?cuenta lso elementos de la cadena
//? form 1
function conteoRecursivo(texto) {
    return texto.length ? 1 + conteoRecursivo(texto.slice(1)) : 0;
}
function conteo(texto) {
    return (typeof texto != 'string') ? console.error('El argumento debe ser una cadena de caracteres.') : console.log(`la cadena tiene ${conteoRecursivo(texto)} elements`);
}
conteo("cinco");

//? form 2
function conteoRecursivo2(texto) {
    if (texto.length > 0){
        return 1 + conteoRecursivo2(texto.slice(1))
    }else{
        return 0;
    }
}
function conteo2(texto) {
    if (typeof texto != 'string') {
        return console.error('El argumento debe ser una cadena de caracteres.');
    }
    return console.log(`la cadena tiene ${conteoRecursivo2(texto)} elements`);
}
conteo2();
