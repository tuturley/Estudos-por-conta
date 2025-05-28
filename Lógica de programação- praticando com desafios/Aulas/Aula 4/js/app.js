function comprar(){
    //pegar o tipo do ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    //pegar a quantidade do ingresso
    let qtd = parseInt(document.getElementById('qtd').value);
    let vazio = document.getElementById('qtd').value;
    if (qtd == "" || vazio == ""){
        alert('Insira a quantidade desejada');
    } else {
        qtd = qtd
    //diminuir a quantidade disponivel do tipo escolhido
    if(tipoIngresso == 'pista'){
        comprarPista(qtd)
    }
    else if(tipoIngresso == 'superior'){
        comprarSuperior(qtd)
    }
    else if(tipoIngresso == 'inferior'){
        comprarInferior(qtd)
    }
    }
}

//função Pista
function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert('Não temos essa Quantidade toda para tipo Pista')
    } else {
        qtdPista = qtdPista - qtd
        document.getElementById('qtd-pista').textContent = qtdPista
        alert('Compra realizada com sucesso!')
    }

}

//Função Superior
function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert('Não temos essa Quantidade toda para o tipo Superior')
    } else {
        qtdSuperior = qtdSuperior - qtd
        document.getElementById('qtd-superior').textContent = qtdSuperior
        alert('Compra realizada com sucesso!')
    }
}
//Função Inferior
function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert('Não temos essa Quantidade toda para o tipo Inferior')
    } else {
        qtdInferior = qtdInferior - qtd
        document.getElementById('qtd-inferior').textContent = qtdInferior
        alert('Compra realizada com sucesso!')
    }

}