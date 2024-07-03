const executar = require('./executar')

function subtração(){
    let resultadoSubtracao = primeiroNum - segundoNum
    console.log(`O resultado é ${resultadoSubtracao}.`)
}

module.exports = {subtração}