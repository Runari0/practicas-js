//? cuanta atras funcion recursivo 
function cuentaAtras(n){
    if (n === 0){
        return console.log(n); //console.log(n) lo use para que tome el 0 en el conteo
    }
    console.log(n);
    return cuentaAtras(n -1) //recursivo
};
cuentaAtras(100); // colocarlo en una linea
