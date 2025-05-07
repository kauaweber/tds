let pronpt = require("readline-sync")

let A = 5
let B = 9
let C = 2

function  D(r, s){
    return (Number(r + s/2))
    
}
function R(A, B){
    return (Number((A + B)))
}
function S(B, C){
    return (Number(B + C))
}
console.log("O resultado do calculo sera: " + D(R(5, 9), S(9, 2)))