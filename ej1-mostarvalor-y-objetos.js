//? mostar variables, tipos y mofificarlos
//? motar arreglos tipos y modificarlos

var a = 5; var b = "lol";
console.log("valor y tipo de variable a");
console.log(a);
console.log(typeof(a)); 
console.log("-------");
console.log("valor y tipo de variable b");
console.log(b);
console.log(typeof(b)); 
console.log("-------");
//-------------------------------------
const liter = {aa: 10, bb: 5};
console.log();
console.log("valor de objeto y llamados");
console.log(liter);
console.log();
console.log("cambio de valor")
console.log();
liter.aa = 20, liter.bb =1;
console.log(liter);
console.log();
console.log("llamada de valores dentro del objeto");
console.log(liter.aa);
console.log(liter["bb"]);
console.log("-------");
console.log("usar Object.key para ver los indice dentro de un objeto");
console.log(Object.keys(liter));
console.log("-------");
Object.keys(liter).forEach((valor) => { console.log(valor)});
console.log("-------");
//-------------------------------------
const cadena = [10, 5,10]; 
console.log("valores de una cadena");
console.log(cadena);
console.log();
console.log("llamada de valores dentro de la cadena");
console.log(cadena[0]);
console.log(cadena[1]);
console.log(cadena[2]);
