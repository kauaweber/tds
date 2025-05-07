
// * Multiplicação
// / Divisão
// + Soma 
// - Subtração
// % Resto da divisão
// // Somente a parte inteira da divisão


let lado = 2 

let area_quadrado = lado*lado 

console.log("area quadrado: "+area_quadrado)


// Atividade 

let Diagonal = 20
let diagonal = 15

let area_losangolo = (Diagonal*diagonal) / 2

console.log("area losangolo: "+area_losangolo)

// Atividade 2

let pi = 3.14
let r = 10

let area_circulo = pi*(r*r)

console.log("Area circulo: "+area_circulo)

// Atividade 3: Media 

let nu1  = 10
let nu2 = 5
let nu3 = 2

console.log("Media:"+ (nu1+nu2+nu3/3))

// Celcius para Fahrenheit

let tC = 5

console.log("Celcius para Fahrenheit:"+ ((5*(tC-32)/9)))

// === IGUALDADE
// ==! DIFERENTE
// < MAIOR
// > MENOR


// codigos
// codigos

let valor = 0 
if (valor){
    // EXECUTAR ESSE BLOCO QUANDO O VALOR FOR MAIOR 
    // QUE 20
    console.log("Oi sumida");
}else if(valor>30){
    //locutor bloco
}

else{
    //execute este bloco de codigo;
}

// Calculo de IMC

let peso = 60
let altura = 1.75
let imc = 60/(altura*altura)

if(imc >= 18.5 && imc <= 24.9){
    console.log("imc medio ")

}else if (imc <= 24.9){
    console.log("imc alto ")
}else{
    console.log("imc baixo ")
}

// Media e comparação

let notaA = 9
let notaB = 6
let notaC = 5 

if(((notaA+[9]+notaB[6]+notaC[5])/3)>=9){
    console.log("nota: A")
}else if (((notaA+[9]+notaB[6]+notaC[5])/3)>=7&& ((notaA+[9]+notaB[6]+notaC[5])/3)<9){
    console.log("nota: B")
}else if (((notaA+[9]+notaB[6]+notaC[5])/3)>=6&& ((notaA+[9]+notaB[6]+notaC[5])/3)<7){
    console.log("nota: C")
}else {
    console.log("nota: D")
}

// Carteira de motorista

let idade = 18 //A pessoa tem 18 anos
let ensinomediocompleto = true // A pessoa tem o ensino medio completo
let idade2 = 15 //a pessoa tem 15 anos
let ensinomedioimcompleto = false // A pessoa não tem o ensino medio completo

console.log("A pessoa nao tem o ensino medio completo? " + (idade2 >=15 && ensinomedioimcompleto))

console.log("A pessoa pode ter carteira de motorista? " + (idade >=18 && ensinomediocompleto)) 


// Novo codigo (for)



//novo codigo (while)
let i = 0 
let valor2 = 0 
while(i <= 10){
    valor = i + 2
    console.log(i)
    i++  

}
// i = 0 
// i = 1
// i = 2
// i = 3

// Loop

for(let i =0; i <=1000; i++){
    if((i%2)=== 0){
        console.log(i +" é par")
    }
}

// Exercicio

let senha = "Gatinho9"

let tam_senha = senha.length

let has_upper = senha.match(/[A-Z]/)
let has_number = senha.match(/[\d]/)

if (has_upper && has_upper && tam_senha >= 8){
    console.log("senha valida")
}else{
    console.log("senha invalida")
}
    
// agudo obtuso e reto

const angulo = 100 

if(angulo > 0 && angulo < 90){
    console.log("Angulo Agudo")
}else if(angulo === 90){
    console.log("Angulo Reto")
}else if((angulo > 90 && angulo < 180)){
    console.log("Angulo Obtuso")
}else {
    console.log("Não tem angulo")
}
  
//
const delta = 2+4*2*2

if(delta > 0){
    console.log("Tem duas raizes diferentes: " +delta)
}else if(delta === 0){
    console.log("Tem duas raizes iguais: "+delta)
}else{
    console.log("Não tem raizes iguais "+delta)
}