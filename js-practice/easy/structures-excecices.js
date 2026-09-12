// 1. Crea un array que almacene cinco animales

let arr = ['dog','cat','horse','mause','tiger']

// 2. Añade dos más. Uno al principio y otro al final
arr.push('lion')
arr.unshift("rat")

console.log(arr)
// 3. Elimina el que se encuentra en tercera posición

arr.splice(2,1)

console.log(arr)

// 4. Crea un set que almacene cinco libros

let set = new Set(['habitos atomicos','100 años de soledad','elogio de la guerra','la biblia','la guerra de los mundos',])

// 5. Añade dos más. Uno de ellos repetido

set.add('el fin') 
set.add('habitos atomicos')

console.log(set)

// 6. Elimina uno concreto a tu elección

set.delete('habitos atomicos')

console.log(set)


// 7. Crea un mapa que asocie el número del mes a su nombre

let map = new Map([
  [1, 'enero'],
  [2, 'febrero'],
  [3, 'marzo'],
  [4, 'abril'],
  [5, 'mayo'],
  [6, 'junio'],
  [7, 'julio'],
  [8, 'agosto'],
  [9, 'septiembre'],
  [10, 'octubre'],
  [11, 'noviembre'],
  [12, 'diciembre'],
  
])
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

console.log(map.has(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

map.set(13, ['junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'])

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let arr1 = ['yimis', 'hoy', 'chao']
console.log(arr1)
let set1 = new Set(arr1)
console.log(set1)
let map1= new Map()
map1.set(1, set1)


console.log(map1)
