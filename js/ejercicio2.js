var x = parseFloat(prompt("Introduzca un valor numérico:"));
var y = parseFloat(prompt("Introduzca el segundo valor numérico:"));

console.log("El numero " + y + "redondeado al alza = " + Math.ceil(y));
console.log("El numero " + x + "redondeado a la baja = " + Math.floor(x));
console.log("El numero " + y + "redondeado al proximo = " + Math.round(y));
console.log("Numero aleatorio entre 0 y 1 = " + Math.random());
console.log(x + " elevado a " + y + " = " + Math.pow(x, y));
console.log("La raiz cuadrada de " + y + " = " + Math.sqrt(y));
console.log("El numero maximo entre " + x + " y " + y + " = " + Math.max(x, y));
console.log("El numero minimo entre " + x + " y " + y + " = " + Math.min(x, y));