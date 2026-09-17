// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let sum = 0;

for (let i = 0; i < 100; i++) {
  sum = +i;
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 2; i <= 50; i = 2 + i) {
  console.log(i);
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let names = ["Juan", "María", "Pedro", "Ana"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let str = "hola familia como estan uwu";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if ("aeiou".includes(str[i].toLowerCase())) {
    count++;
  }
}

console.log(count);
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let result = 1;
let numbers = [1, 2, 3, 4, 5,4653,32,432,23,5,867,43,63,4,23, 11];
for (let i in numbers) {
  result = result * i;
}

console.log(result);
// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i < 10; i++) {
  console.log(`5*${i}=${i * 5}`);
}

// 8. Usa un bucle para invertir una cadena de texto

let a = [];

for (let i = str.length; i >= 0; i--) {
  a.push(str[i]);
}

console.log(a.join(""));

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let prev = 0;
let act = 1;
let tmp = 0;
for (let i = 0; i < 10; i++) {
  tmp = act;
  act = prev + act;
  console.log(act);
  prev = tmp;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
// 
let x=[] 
for (let i = 0; i, i<numbers.length; i++){
  if (numbers[i] > 10) {
    x.push(numbers[i])
  }
}
console.log(x)
