//sortear numeros
function sortear(){
    let qtd = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero = 0;
    for (let i = 0; i < qtd; i++) {
        numero = obterNumeroAleatorio(de, ate);
//Não repetir numero
    while (sorteados.includes(numero)){
        numero = obterNumeroAleatorio(de, ate);
    }

        sorteados.push(numero);
    }
//Exibir os números aleatórios
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();

}

//numero aleatorio
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}