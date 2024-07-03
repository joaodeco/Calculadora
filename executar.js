const prompt = require('prompt-sync')({sigint: true});
const soma = require ('./soma')
const subtracao = require ('./subtracao')
const multiplicacao = require ('./multiplicacao')
const divisao = require ('./divisao')
const porcentagem = require ('./porcentagem')


let primeiroNum = prompt('Qual seu primeiro número?')

    console.log(`
    Olá essas são as nossas operações que estão funcionando.

    + (soma)
    - (subtração)
    / (divisão)
    x (multiplicação)
    % (porcentagem)

    Sair(fecha o programa)

    `)

let opcao = prompt('Digite o simbolo sa sua operação:');

let segundoNum = prompt('Qual seu segundo número?')

switch(opcao){
    case'+':
        console.log(soma(parseFloat(primeiroNum), parseFloat(segundoNum)))
        break
    case'-':
        console.log(subtracao(parseFloat(primeiroNum), parseFloat(segundoNum)))
        break
    case'/':
        console.log(divisao(parseFloat(primeiroNum), parseFloat(segundoNum)))
        break
    case'x':
        console.log(multiplicacao(parseFloat(primeiroNum), parseFloat(segundoNum)))
        break
    case'%':
        console.log(porcentagem(parseFloat(primeiroNum), parseFloat(segundoNum)))
        break
    case'Sair':
        break
    default:
        console.log('Caractere invalido!! Tente novamente')
        executar()
}
