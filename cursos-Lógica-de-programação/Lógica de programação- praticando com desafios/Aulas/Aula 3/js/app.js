let totalGeral = 0;
let carrinho = document.getElementById("lista-produtos")
    carrinho.innerHTML = ""
let total = document.getElementById('valor-total')
    total.innerHTML = `R$${0}`
function adicionar(){
    //recuperar valores nome do produto, quantidade e valor
    let produtos = document.getElementById("produto").value;
    let nomeProduto = produtos.split('-')[0];
    let valorUnitario = produtos.split('R$')[1];
    let qtd = document.getElementById('quantidade').value;
    if (qtd == 0){
        qtd = 1
    }
    //calcular o preço, o nosso subtotal
    let subtotal = qtd*valorUnitario
    //adicionar no carrinho
    let carrinho = document.getElementById("lista-produtos")
    carrinho.innerHTML = carrinho.innerHTML + ` <section class="carrinho__produtos__produto"> 
          <span class="texto-azul">${qtd}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`
    //atualizar o valor total 
    totalGeral = totalGeral + subtotal
    let total = document.getElementById('valor-total')
    total.innerHTML = `<span class="texto-azul" id="valor-total">R$${totalGeral}</span>`
}

function limpar(){
    let produtos = document.getElementById("produto").value;
    let valorUnitario = produtos.split('R$')[1];
    let qtd = document.getElementById('quantidade').value;
    let carrinho = document.getElementById("lista-produtos")
    let subtotal = qtd*valorUnitario
    totalGeral = totalGeral*0 + subtotal*0
    carrinho.innerHTML = ""
    let total = document.getElementById('valor-total')
    total.innerHTML = `R$${totalGeral}`
}