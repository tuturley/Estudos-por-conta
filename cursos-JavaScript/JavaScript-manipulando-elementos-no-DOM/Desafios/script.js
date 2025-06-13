// Seleciona os botões
const btnFoco = document.getElementById('btnFoco');
const btnCurto = document.getElementById('btnCurto');
const btnLongo = document.getElementById('btnLongo');

// Lista todos os botões para facilitar a manipulação
const botoes = [btnFoco, btnCurto, btnLongo];

// Função para trocar a classe active
function ativarBotao(botaoSelecionado) {
  botoes.forEach(botao => {
    botao.classList.remove('active');
  });
  botaoSelecionado.classList.add('active');
}

// Eventos de clique
btnFoco.addEventListener('click', () => ativarBotao(btnFoco));
btnCurto.addEventListener('click', () => ativarBotao(btnCurto));
btnLongo.addEventListener('click', () => ativarBotao(btnLongo));

// Cria o objeto de áudio
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true

// Pega o checkbox
const checkbox = document.getElementById('toggleMusic');

// Quando o checkbox muda de estado
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    musica.play();
  } else {
    musica.pause();
  }
});
