const prompt = require('prompt-sync')({sigint: true});
const {soma} = require ('./soma')
const {subtracao} = require ('./subtracao')
const {multiplicacao} = require ('./multiplicacao')
const {divisao} = require ('./divisao')
const {porcentagem} = require ('./porcentagem')

executar()

function executar(){

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

let resultado

let opcao = prompt('Digite o simbolo sa sua operação:');

let segundoNum = prompt('Qual seu segundo número?')

primeiroNum = parseFloat(primeiroNum)
segundoNum = parseFloat(segundoNum)

if(typeof(primeiroNum) != 'number' || typeof(segundoNum) != 'number'){

    console.log(`opção inválida`)
    executar()

}else{


switch(opcao){
    case'+':
        resultado = soma(primeiroNum, segundoNum)
        break
    case'-':
        resultado = subtracao(primeiroNum, segundoNum)
        break
    case'/':
        resultado = divisao(primeiroNum, segundoNum)
        break
    case'*':
        resultado = multiplicacao(primeiroNum, segundoNum)
        break
    case'%':
        resultado = porcentagem(primeiroNum, segundoNum)
        break
    case'Sair':
        break
    default:
        console.log('Caractere invalido!! Tente novamente')
        executar()
    }
    console.log(resultado)
}
}