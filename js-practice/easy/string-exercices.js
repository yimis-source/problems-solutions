// 1. Concatena dos cadenas de texto
let str = "hola familia"
console.log("hola" + "mundo")
// 2. Muestra la longitud de una cadena de texto
console.log(str.length)
// 3. Muestra el primer y último carácter de un string
console.log(str[0],str[-1])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(str.toLowerCase(),str.toUpperCase())
// 5. Crea una cadena de texto en varias líneas
let str1 = `hola familia como estan
  IJIJIJI
  MUAUJAJA
  TODOS LOCOS ${str}`
// 6. Interpola el valor de una variable en un string
console.log(`jijiji soy ${str1}`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(str1.replaceAll(" ", "-"))
// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(str1.includes("hola"))
// 9. Comprueba si dos strings son iguales
console.log(str===str1)
// 10. Comprueba si dos strings tienen la misma longitud
console.log(str.length===str1.length)