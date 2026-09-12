// 1. Crea una variable para cada operación aritmética

var sum= 1+2
var sub= 5-3
var mult= 4*2
var div= 10/2
var mod= 10%3

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

var asignacionSum = 5
asignacionSum += 3 // equivalente a asignacionSum = asignacionSum + 3

var asignacionSub = 10
asignacionSub -= 2 // equivalente a asignacionSub = asignacionSub - 2

var asignacionMult = 4
asignacionMult *= 2 // equivalente a asignacionMult = asignacionMult * 2

var asignacionDiv = 10
asignacionDiv /= 2 // equivalente a asignacionDiv = asignacionDiv / 2

var asignacionMod = 10
asignacionMod %= 3 // equivalente a asignacionMod = asignacionMod % 3

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(5 > 3) // true
console.log(2 < 4) // true
console.log(3 >= 3) // true
console.log(5 <= 5) // true
console.log(10 == 10) // true

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 < 3) // false
console.log(2 > 4) // false
console.log(3 > 3) // false
console.log(5 > 5) // false
console.log(10 != 10) // false

// 5. Utiliza el operador lógico and

console.log(5 > 3 && 2 < 4) // true

// 6. Utiliza el operador lógico or

console.log(5 < 3 || 2 < 4) // true

// 7. Combina ambos operadores lógicos

console.log((3>2 && 2>5) || 10!=10 )

// 8. Añade alguna negación

console.log(!true)

// 9. Utiliza el operador ternario

console.log(2%4==0  ? true :false)

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log(2%4==0 || 500<3121 ? true:false)
