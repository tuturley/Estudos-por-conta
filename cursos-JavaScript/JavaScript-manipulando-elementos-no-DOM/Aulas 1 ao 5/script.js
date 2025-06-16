const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const startPauseBtn = document.querySelector('#start-pause');
const iniciarOuPausarBtn = document.querySelector('#start-pause span')
const imagemComeçarOuPausarBtn = document.querySelector('.app__card-primary-butto-icon')
//Audios
const musica = new Audio('./sons/luna-rise-part-one.mp3');
const startAudio = new Audio('./sons/play.wav');
const pauseAudio = new Audio('./sons/pause.mp3');
const alertAudio = new Audio('./sons/beep.mp3');


let tempoDecorridoEmSegundos = 5
let intervaloId = null

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

focoBtn.addEventListener('click', () => {
alterarContexto('foco');
focoBtn.classList.add('active');
});

curtoBtn.addEventListener('click', () => {
alterarContexto('descanso-curto');
curtoBtn.classList.add('active');
});

longoBtn.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBtn.classList.add('active');
});

function alterarContexto(contexto) {
    // Remove a classe 'active' de todos os botões
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada?,<br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>
            `;
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar a superfície,<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `;
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0){
        //alertAudio.play()
        alert('Tempo Finalizado')
        zerar()
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log('temporizador: ' + tempoDecorridoEmSegundos)
}

startPauseBtn.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if (intervaloId) {
        zerar();
        pauseAudio.play();
        return;
    }

    startAudio.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarBtn.textContent = "Pausar";
    imagemComeçarOuPausarBtn.setAttribute('src', './imagens/pause.png'); // Troca para imagem de pausa
}

function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBtn.textContent = "Começar";
    imagemComeçarOuPausarBtn.setAttribute('src', './imagens/play_arrow.png'); // Volta para imagem de play
    intervaloId = null;
}
