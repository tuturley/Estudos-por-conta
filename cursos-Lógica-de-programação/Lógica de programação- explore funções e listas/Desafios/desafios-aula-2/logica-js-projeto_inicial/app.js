// 1.Criar uma função que exibe "Olá, mundo!" no console.
function OlaMundo(){
    console.log('Olá, Mundo!')
}
OlaMundo()
// 2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome) {
    console.log('Olá',nome,'!');
}
exibirNome('Arthur');
//3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function numero(numero) {
    return parseInt(numero*2)
}
console.log(numero(4))
//4.Criar uma função que recebe três números como parâmetros e retorna a média deles.
function outrosNumeros(numero1, numero2, numero3){
    return parseInt((numero1 + numero2 + numero3)/3)
}
console.log(outrosNumeros(27,36,48))
//5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numeroMaior(numero4, numero5) {
    if (numero4 > numero5)
        return (numero4)
    else
        return (numero5)
}
console.log(numeroMaior(8,9))
//6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo.
function vezesEleMesmo(numero6) {
    return numero6*numero6
}
console.log(vezesEleMesmo(9))