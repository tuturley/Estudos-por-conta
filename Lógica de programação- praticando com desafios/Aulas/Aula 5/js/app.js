let amigos = []; 
function adicionar() {
  let nomeInput = document.getElementById('nome-amigo');
  let listaElement = document.getElementById('lista-amigos');
  let nome = nomeInput.value.trim();

  // Verificar se o nome está vazio
  if (nome === "") {
    alert("Digite um nome antes de adicionar.");
    return;
  }

  // Verificar se o nome já foi adicionado
  let nomesAtuais = listaElement.textContent.split(',').map(n => n.trim());
  if (nomesAtuais.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    nomeInput.value = "";
    return;
  }

  // Adicionar nome com vírgula se já houver outros
  if (listaElement.textContent.trim() !== "") {
    listaElement.textContent += ", " + nome;
  } else {
    listaElement.textContent = nome;
  }

  // Limpar o campo
  nomeInput.value = "";
}


function sortear(){
//pegar os nomes da lista de amigos incluidos
let listaElement = document.getElementById('lista-amigos');
//pegar o valor da lista de sorteio
let resultadoElement = document.getElementById('lista-sorteio');
//embaralhar os nomes
  // Verificar se há nomes suficientes
let nomes = listaElement.textContent.split(',').map(nome => nome.trim()).filter(nome => nome !== "");

if (nomes.length < 2) {
    alert("Adicione pelo menos 2 amigos para sortear.");
    return;
}

  // Embaralhar os nomes pelo algoritmo Fisher-Yates
let sorteio = [...nomes];
for (let i = sorteio.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [sorteio[i], sorteio[j]] = [sorteio[j], sorteio[i]];
}

  // Montar os pares
let resultado = "";
for (let i = 0; i < sorteio.length; i++) {
    let amigo1 = sorteio[i];
    let amigo2 = sorteio[(i + 1) % sorteio.length]; // o último presenteia o primeiro
    resultado += `${amigo1} → ${amigo2}<br>`;
}

  // Mostrar na tela
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