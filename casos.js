// 1: Checando se pode acessar área restrita (>=18 anos, assinatura)

// Declarando as variaveis 
let idade = 16 // A pessoa tem 18 anos 
let temAssinatura = true // A pessoa tem uma assinatura (true)

// Verificando se a pessoa pode acessar a área
console.log("A pessoa pode acessar a área esclusiva? " + (idade >=16 && temAssinatura))

/*
A pessoa pode acessar a área exclusiva se for maior ou igual a 18 anos E se tiver uma assinatura paga.
O operador "&&" (AND) vai retornar true se as duas condições forem verdadeiras.
Passos:
1. Declarar as variaveis necessarias e atribuir os valores
2. Testar
----------------------------------------------------------------------------------------------------------*/

//declarando as variaveis 
let idade2 =  18 // A pessoa tem 18 anos 
let temIdentidade = true // A pessoa tem uma identidade (true)

// verificando se a pessoa pode comprar bebida alcoólica
console.log("A pessoa pode comprar a bebida alcoólica? " + (idade2 >=18 && temIdentidade))

// Cupom de desconto 
let cliente1 = 100
let cupomDedesconto100 = true // O cliente pode usar cupom para sua compra de 100 (true)

// Verificando se o cliente pode comprar com cupom 
console.log("A pessoa pode comprar com cupom a sua compra de 100?" + (cliente1 >100 && cupomDedesconto100))

// Verificando se a pessoa idosa pode estacionar nessa vaga
let pessoaidosa = 50 // A pessoa idosa tem que ter 60
let Identidade = true // A pessoa tem identidade 

// Verificando se a pessoa idosa pode estacionar
console.log(" A pessoa idosa pode estacioanar? " + ( pessoaidosa >=60 || Identidade == true)) 


//Declarando variaveis
let controle = true // A pessoa precisa ter o controle para jogar o video game
let podeJogar = true // A pessoa pode jogar

//Verificando se a pessoa pode jogar video game
console.log("A pessoa precisa de um controle para jogar video game? " + (controle || podeJogar))