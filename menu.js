const prompt = require('prompt-sync')({sigint: true});

executar()

function executar(){
    console.log(`
    Olá essas são as nossas operações que estão funcionando.

    + (adição)
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