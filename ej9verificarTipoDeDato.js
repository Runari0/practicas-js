//? muestraque dato que esta colocado 
//? form 1
function caracte(n){ return console.log(`Valor introducido '${n}' es de tipo ${typeof n}`)};
caracte(Date());// cambia este valor
//? forma 2
console.log()
function caracter(n){
    if (typeof n === "string"){
        return console.log(`Valor introducido ${n} es una cadena de caracteres`);
    }else if(typeof n === "number"){
        return console.log(`Valor introducido ${n} es una numero`);
    }else if(typeof n === "boolean"){
        return console.log(`Valor introducido ${n} es un boolean`);
    }else if(typeof n === "NaN"){
        return console.log(`Valor introducido ${n} es un NaN`);
    }else if(typeof n === "undefined"){
        return console.log(`Valor introducido ${n} es un undefined`);
    }else if(typeof n === "esFinite"){
    return console.log(`Valor introducido ${n} es un Finite`);
    }else{
    return console.log(`Valor introducido es '${n}' de tipo ${typeof n}`);
    }
}
caracter(Date());// cambia este valor
