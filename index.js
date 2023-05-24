// ejercicio clase 10
// primera parte

const nombre = "Argia";
const apellido = "Unsen";


console.log(nombre + " " + apellido)

//segunda parte

const edad = 32
const cantidadDeHijos = 1

let suma = edad + cantidadDeHijos
console.log(suma)

const años = suma + 7
console.log(años)



let curiosidad = nombre + edad
console.log(curiosidad)

//switch case
const palabra = "hola";
switch (palabra) {
  case "hola":
    console.log("buenos dias");
    break;
  case "adios":
    console.log("hasta pronto");
    break;
  default:
    console.log("Hola mundo");
    break;
}

//for
const frutas = ["🍎", "🍏"];
for (let index = 0; index < frutas.length; index++) {
  console.log("El elemento es: ", frutas[index]);
}

//metodos de array: push
const gente = ["MARCOS", "PRISCILA", "RAMIRO"];
gente.push("NATALIA");
console.log(gente);

//metodos de array : pop
const nombres = ["MARCOS", "PRISCILA", "RAMIRO"];
nombres.push("NATALIA");
console.log(nombres);
nombres.pop();
console.log(nombres);

//while
let count = 50;
let contador = 0;
while (count > contador) {
  console.log("Hola chicos RD");
  contador++;
}