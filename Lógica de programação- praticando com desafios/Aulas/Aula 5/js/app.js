let amigos = []; 
function adicionar() {
  let nomeInput = document.getElementById('nome-amigo');
  let listaElement = document.getElementById('lista-amigos');
  let nome = nomeInput.value.trim();

  if (nome === "") {
    alert("Digite um nome antes de adicionar.");
    return;
  }

  // Verificar se o nome já existe
  let spans = listaElement.querySelectorAll('span');
  for (let span of spans) {
    if (span.textContent === nome) {
      alert("Esse nome já foi adicionado.");
      nomeInput.value = "";
      return;
    }
  }

  // Criar um span para o nome
  let span = document.createElement('span');
  span.textContent = nome;
  span.style.cursor = "pointer";
  span.style.marginRight = "10px";

  // Adiciona funcionalidade de remover ao clicar
  span.addEventListener('click', function () {
    listaElement.removeChild(span);
  });

  listaElement.appendChild(span);
  nomeInput.value = "";
}



function sortear() {
  let listaElement = document.getElementById('lista-amigos');
  let resultadoElement = document.getElementById('lista-sorteio');

  // Pegar os nomes dos spans
  let spans = listaElement.querySelectorAll('span');
  let nomes = [];

  for (let span of spans) {
    let nome = span.textContent.trim();
    if (nome !== "") {
      nomes.push(nome);
    }
  }

  if (nomes.length < 2) {
    alert("Adicione pelo menos 2 amigos para sortear.");
    return;
  }

  // Embaralhar
  let sorteio = [...nomes];
  for (let i = sorteio.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [sorteio[i], sorteio[j]] = [sorteio[j], sorteio[i]];
  }

  // Criar pares
  let resultado = "";
  for (let i = 0; i < sorteio.length; i++) {
    let amigo1 = sorteio[i];
    let amigo2 = sorteio[(i + 1) % sorteio.length];
    resultado += `${amigo1} → ${amigo2}<br>`;
  }

  resultadoElement.innerHTML = resultado;
}


function reiniciar(){
//pegar os dados
let nomes = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');
let resultado = document.getElementById('lista-sorteio');
//limpar a aba de Sorteio
resultado.textContent = ""
//limpar a lista de amigos incluidos
lista.textContent = ""
//limpar os nomes
nomes.value = ""
}