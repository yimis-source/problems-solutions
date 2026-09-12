// 1. Imprime por consola tu nombre si una variable toma su valor

let name = "yimis";

if (name === "yimis") {
  console.log(name);
}


// 2. Verifica usuario y contraseña

let user = "yimis";
let password = "hola";

if (user === "yimis" && password === "hola") {
  console.log("logged");
}


// 3. Verifica si un número es positivo, negativo o cero

let number = -5;

if (number > 0) {
  console.log("positivo");
} else if (number < 0) {
  console.log("negativo");
} else {
  console.log("cero");
}


// 4. Verifica si puede votar y cuántos años le faltan

let age = 16;

if (age >= 18) {
  console.log("Puede votar");
} else {
  console.log(`No puede votar. Le faltan ${18 - age} años`);
}


// 5. Operador ternario

let type = age >= 18 ? "adulto" : "menor";

console.log(type);


// 6. Estación dependiendo del mes

let month = 7;

if (month === 12 || month === 1 || month === 2) {
  console.log("Invierno");
} else if (month >= 3 && month <= 5) {
  console.log("Primavera");
} else if (month >= 6 && month <= 8) {
  console.log("Verano");
} else if (month >= 9 && month <= 11) {
  console.log("Otoño");
} else {
  console.log("Mes inválido");
}


// 7. Número de días del mes

if (month === 2) {
  console.log("28 días");
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  console.log("30 días");
} else if (month >= 1 && month <= 12) {
  console.log("31 días");
} else {
  console.log("Mes inválido");
}


// 8. Switch: saludo dependiendo del idioma

let language = "es";

switch (language) {
  case "es":
    console.log("Hola");
    break;

  case "en":
    console.log("Hello");
    break;

  case "fr":
    console.log("Bonjour");
    break;

  default:
    console.log("Idioma no disponible");
}


// 9. Switch: estación del año

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Invierno");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Primavera");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Verano");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Otoño");
    break;

  default:
    console.log("Mes inválido");
}


// 10. Switch: días del mes

switch (month) {
  case 2:
    console.log("28 días");
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 días");
    break;

  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 días");
    break;

  default:
    console.log("Mes inválido");
}