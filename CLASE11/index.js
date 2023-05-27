//Ejercicio clase 10
//primera parte

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



//Ejercitacion clase 11
//Primera parte

let precio 
let topping = "kitkat" 
if (topping === "Oreo") {
  precio = 10
} 
else if (topping === "KitKat") {
  precio = 15
}
else if (topping === "Kinder") {
  precio = 20
}
else{
  console.log("No tenemos este topping")
  precio = 0;
}
console.log("El precio del helado es $" + precio)

const helado = 500
let precioFinal = helado + precio
console.log("El helado cuesta $" + precioFinal)

//Segunda parte

let pedido = window.prompt("ingrese su pedido (carne - pescado - verdura)")
switch (pedido) {
  case "carne":
    console.log("bebida vino tinto");
    break;
  case  "pescado":
    console.log("bebida vino blanco");
    break;
  case  "verdura":
    console.log("bebida agua");
    break;
  default:
    console.log("elija carne, verdura o pescado");
    break;
}

//Tercera parte

let productos = ["alimento", "ropa", "juguetes", "accesorios"]
// for ( part1: se declara el indice ; part2: condicion a cumplir para que continúe el loop ; part3: como va a cambiar el index )
for (let index = 0; index < productos.length; index++) {
  console.log("vuelta ", index);
  console.log(productos[index]);
}
productos.push("varios")
for (let index = 0; index < productos.length; index++){

  if (productos[index] === "varios") {
    console.log("vuelta ", index);
    console.log(productos[index]);
  }
}

//Cuarta parte

let numero = window.prompt("ingrese numero")
while (numero < 11) {
  console.log("Número es más chico que 11");
  numero++;
}