//? convertir objecto a cadena y viceversa
const obj = {
    nombre: "marco",
    apellido: "lolol",
    lol: "lolo"
}
console.log(`literal o Objeto `);
console.log(obj);
console.log();
const arr = Object.entries(obj);
console.log(`convertido a cadena`);
console.log(arr);
console.log();
console.log("regresa a objeto");
const obj2 = Object.fromEntries(arr);
console.log(obj2);
