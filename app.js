const process=require('process')
const suma=require('require')
const resta=require('./resta')
const dividir=require('./dividir')
const multiplicar=require ('./multiplicar')
const {argv}= process

function calculadora(comando,a,b) {
    switch (comando.toLowerCase()) {
        case "sumar":
            return suma(a,b)
            break;
        case "restar":
            return resta(a,b)
            break
        case "multiplicar":
            return multiplicar(a,b)
            break
        case "dividir":
            return dividir(a,b)
        default:
            break;
    }
    
}
console.log(calculadora(arg[2],+argv[3],+argv[4]))