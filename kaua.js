// 1. Declarando algumas variaveis para usar nos testes 
let a = 10 // variavel a, com valor 10 (let significa que pode mudar)
let b = 20 // variavel b, com valor 20
let c = 30 // variavel c, com valor 30

console.log(a)   

// 2. Testando operadores de comparação
console.log("Operadores de comparação:");

console.log("a é igual a b? " + (a == b )) // Concatenação  com comparação
console.log("a é diferente de b? " + (a !=b)) // Operador para testar diferença (!=)
console.log( "a é maior que b? " + (a > b)) // Operador para testar se é maior (>) 
console.log( "a é maior que b? " + (a < b)) // Operador para testar se é maior (<) 
console.log( "a é maior que b? " + (a >= b)) /* Operador de maior ou igual (>=) */
console.log( "a é maior que b? " + (a <= b))// Operador de menor ou igual (<=)

// 3. Testando operadores lógicos 

console.log("\n Operadores Lógicos: ") // \n é para quebra de linha

console.log("a é maior que 5  E b é menor que 30? " + (a > 5 && b <30)) // Operador lógico "E" ou "AND" (&&)

console.log("a é maior que 7  E b é menor que 24? " + (a > 7 && b <24)) // Operador lógico "E" ou "AND" (&&)

console.log("a é menor que 23  E b é maior que 15? " + (a < 23 && b >15)) // Operador lógico "E" ou "AND" (&&)

console.log("a é maior que 15  E b é maior que 22? " + (a < 5 && b >22)) // Operador lógico "E" ou "AND" (&&)

console.log(" a é igual a 10 OU b é maior que 25?" + (a == 10 || b > 25)) // Operador logico "OU" ou "OR" (||)

// NOT 

console.log("a nao é maior que 5? " + !(a > 5)) // Operador lógico "não" ou "NOT" (!)

