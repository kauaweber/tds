// exercicio : 

// function lunch(a, b){
//         return a + b 
//     }
// l = lunch (4, 5);
// console.log(l)


////////////////////////////////////////////////////////////////////////////////////////////////////////

let pronpt = require("readline-sync")


// function papa(a, b){
//     return a * b
// }

// // Number()

// p = papa(Number(pronpt.question("aaaa: ")), Number(pronpt.question("aaaa: ")));
// console.log(p)


///////////////////////////////////////////////////////////////////////////////////////////////////////

// function meno(b, v){
//     if(b > v){
//         return b;
//     }else{
//         return v;
//     }
// }
// m = meno(Number(pronpt.question("O maior numero e: ")),Number(pronpt.question("O maior numero e: ")));
// console.log(m)
  
////////////////////////////////////////////////////////////////////////////////////////////////////////

// function pato(x){
//     if(x > 0){
//         return "positivo";
//     }else if(x === 0){
//         return "zero";
//     }else{
//         return "negativo"
//     }
// }
// p = pato(Number(pronpt.question("O numero e: ")));
// console.log(p)


////////////////////////////////////////////////////////////////////////////////////////////////////////

// function vogal(v){
//     if(v.match(/[a|e|i|o|u]/)){
//         return "vogal: sim";
//     }else{
//         return "vogal: nao";
//     }
// }

// v = vogal (pronpt.question("Uma letra: "));  
// console.log(v)


///////////////////////////////////////////////////////////////////////////////////////////////////////

// function check (idade, ensino){
//     if(idade >= 16){
//         console.log(ensino, "s");
//         if(ensino.includes("b") !== true){
//             return true
//         }

//      }
//      return false; 
// }
        
    



// if(check(pronpt.question("idade: "),pronpt.question("Tem ensino medio completo: "))){
// console.log("Pode votar!");
// }else{
//     console.log("Nao pode votar!");
// }



///////////////////////////////////////////////////////////////////////////////////////////////////////

// function calculoFrete(dis){
//     if(dis >= 0){
//         return "Normal";
//     }else if (dis >= 0.75){
//         return "Normal";
//     }else{
//         return "Erro ao calcular o frete";
//     }
// }

// console.log(calculoFrete(pronpt.question("Bota a distancia em km: ")));


///////////////////////////////////////////////////////////////////////////////////////////////////////

// function moeda(moeori, moedez, valor){
//     if(moeori === "usd" && moedez === "brl"){
//         return valor * 5.15;
//     }else if (moeori === "eur" && moedez === "brl" ){
//         return valor * 5.60;
//     }else if (moeori === "usd" && moedez === "eur"){
//         return valor * 1.45;
//     }
//     return  "Nao encontrado"
// }
    
    
// console.log(moeda(pronpt.question("Escreva a moeda que ira converter: "), pronpt.question("Escreva a moeda de destino: "), parseFloat(pronpt.question("Escreva a moeda que ira converter"))));


    /////////////////////////////////////////////////////////////////////////////////////////////////////


// function calculoFreteNORMAL(km){
//     return km * 0.50
// }

// function calculoFreteEXPRESSO(km){
//     if (km > 100){
//         return km * 1;
//     }else{
//         return km * 0.7;
//     }

// }

// function calculoFreteMASTER(km){
//     if (km >= 100){
//         return km * 2;
//     }else{
//         return km * 1;
//     }
// }

// function calculoFreteKING(km){
//     if (km > 100){
//         return km * 5;
//     }else{
//         return km * 2;
//     }
// }
// let km = parseFloat(pronpt.question("Km: "))
// let tipo = pronpt.question("Qual tipo de frete: ")

// if(tipo === "NORMAL"){
//     console.log(calculoFreteNORMAL(km))
// }else if(tipo === "EXPRESSO"){
//     console.log(calculoFreteEXPRESSO(km))
// }else if(tipo === "MASTER"){
//     console.log(calculoFreteMASTER(km))
// }else if(tipo === "KING"){
//     console.log(calculoFreteKING(km))
// }else{
//     return "Nao exite esse frete "
// }

////////////////////////////////////////////////////////////////////////////////////////////////


// let n1 = pronpt.question("qual numero? ");
// let n2 = pronpt.question("qual n2? ");
// let op = pronpt.question("qual op? ");

// function Calculo(n1, n2, op){
//     if( op === "soma"){
//         return n1 + n2;
//     } else if ( op === "subtrair"){
//         return n1 - n2;
//     }else if( op === "multiplicar" ){
//         return n1 * n2;
//     }else if ( op === "dividir"){
//         return n2 !== 0? n1 / n2: "Erro:Divisao por zero";
//     }else{
//         return "Operaçao invalida";
//     }
// }
// let resultado = Calculo(n1, n2, op);
// console.log("qual o resultado:",resultado );

///////////////////////////////////////////////////////////////////////////////////////////////

// function desconto (valor, desc){
//     return valor - ((valor * desc)/100);
// }

// let desconto = 
// console.log ("")

///////////////////////////////////////////////////////////////////////////////////////////////

// function potencia(x, z){
//     return valor (x, z);
// }

// function radiaçao (x, z){
//     return valor (x, z)

//     if(x === "1"){
//         return  "x"
//     }else if (z === "2"){
//         return "z"
//     }else{
//         return "y"
//     }
// }

// let numero = pronpt.question("Um numero: ");
// let expo = pronpt.question("O expoente: ");

// let resultado = pronpt.question(numero, expo);

// console.log("A potencia é: ", resultado);

///////////////////////////////////////////////////////////////////////////////////////////////////

// function calcIdade(idade){
//     return [(idade/2)+7, 2*(idade-7)];
// }

// let idades = calcIdade (Number(pronpt.question("idade: ")));
// console.log ("idade maxima é: " + idades[1])
// console.log ("idade minima é: " + idades[0])

///////////////////////////////////////////////////////////////////////////////////////////////////

function calcArea(a){
    return a * a;
}

function valor_area(terreno, local){
    if (local === "centro"){
        return terreno * 14;
    }
    return terreno * 7 
}

let terreno = calcArea(pronpt.question("Lado: "));
let valor = valor_area(terreno, pronpt.question("localizacao: "));

console.log("Area: " + terreno)
console.log("terreno: " + valor)