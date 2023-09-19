const process=require('process')
const suma=require('./suma')
const resta=require('./resta')
const dividir=require('./dividir')
const multiplicar = require ('./multiplicar')
const {argv}= process

function calculadora(comando,a,b) {
    switch (comando.toLowerCase()) {
        case "sumar":
            return suma(a,b)
            
        case "restar":
            return resta(a,b)
            
        case "multiplicar":
            return multiplicar(a,b)
            
        case "dividir":
            return dividir(a,b)
        default:
            break;
    }
    
}
console.log(calculadora(argv[2],+argv[3],+argv[4]))