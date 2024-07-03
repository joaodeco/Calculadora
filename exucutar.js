const prompt = require('prompt-sync')({sigint: true});
const multiplicação = require('./multiplicação')
const divisão = require('./divisão')
const soma = require('./soma')
const subtração = require('./subtração')
const porcentagem = require('./porcentagem')


executar()

function executar(){
    console.log(`
    Olá essas são as nossas operações que estão funcionando.

    + (soma)
    - (subtração)
    / (divisão)
    x (multiplicação)
    % (porcentagem)

    Sair(fecha o programa)

    `)
}


let opcao = prompt('Digite o simbolo sa sua operação:');

switch(opcao){
    case'+':
        soma()
        break
    case'-':
        subtração()
        break
    case'/':
        divisão()
        break
    case'x':
        multiplicação()
        break
    case'%':
        porcentagem()
        break
    case'Sair':
        break
    default:
        console.log('Caractere invalido!! Tente novamente')
        executar()
}

let primeiroNum = prompt('Qual seu primeiro número?')

let segundoNum = prompt('Qual seu segundo número?')
