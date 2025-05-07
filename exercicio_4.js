let pronpt = require("readline-sync")

let note1 = 6
let note2 = 9
let note3 = 5

let peso1 = 3
let peso2 = 2
let peso3 = 1

function result(n1, n2, n3){
    let medium = (n1+n2+n3)/3

    if (medium >=9.5){
        return "A"
    }else if(medium >= 8.5 && medium< 9.5){
        return "B"
    }else if(medium >= 7 && medium< 8.5){   
        return "C"
    }else{
        return "D"
    }

}

function resultWeighted(p1, p2, p3, n1, n2, n3){
    let medium = (n1 + n2 + n3) / (p1 + p2 + p3) 

    if (medium >=9.5){
        return "A"
    }else if(medium >= 8.5 && medium< 9.5){
        return "B"
    }else if(medium >= 7 && medium< 8.5){   
        return "C"
    }else{
        return "D"
    }

}

let typeMedium = "weighted"

if(typeMedium == "weighted"){
console.log(resultWeighted(p1, p2, p3, n1, n2, n3, ))
}else {

}

console.log(Number)