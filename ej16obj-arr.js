const obj = {
    nombre: "marco",
    apellido: "lolol",
    lol: "lolo"
}
console.log(obj)

console.log()

const arr = Object.entries(obj);
console.log(arr)
console.log()
console.log("pasar a objeto")

const obj2 = Object.fromEntries(arr);
console.log(obj2)