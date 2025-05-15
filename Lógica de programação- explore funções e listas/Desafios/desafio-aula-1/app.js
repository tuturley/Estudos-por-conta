// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botaoConsole(){
    console.log('O botão foi clicado');
}
// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function exibirAlerta(){
    alert('Eu amo JS');
}
// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você
function perguntarCidade(){
    let cidade = prompt('Fale uma cidade do Brasil')
    alert(`Estive em ${cidade} e lembrei de você`)
}
// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function exibirSoma(){
    num1 = parseInt(prompt('Digite um numero'))
    num2 = parseInt(prompt('Escolha outro numero'))
    soma = num1+num2
    alert(`a soma dos dois deu ${soma}`)
}