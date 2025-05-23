//sortear numeros
function sortear(){
    let qtd = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero = 0;
    for (let i = 0; i < qtd; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }

alert(sorteados)
}
//numero aleatorio
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max-min + 1)) + min;
}