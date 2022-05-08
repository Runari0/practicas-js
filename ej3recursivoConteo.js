//? cuanta atras funcion recursivo
//? form 1
function cuentaAtras(n){
    if (n === 0){
        return console.log(n); //console.log(n) lo use para que tome el 0 en el conteo
    }
    console.log(n);
    return cuentaAtras(n -1) //recursivo
};
cuentaAtras(10); // colocarlo en una linea
console.log();
//? form 2 cuenta adelante sin recursividad
function cuenta(n){
    for(i = 0; i <= n; ++i){
        console.log(i);
    }
};
cuenta(10); // colocarlo en una linea
