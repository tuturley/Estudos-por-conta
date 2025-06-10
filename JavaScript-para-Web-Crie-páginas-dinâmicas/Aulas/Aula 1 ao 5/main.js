function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

let i = 0;
for (i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    function tocaSom() {
        const idAudio = `#som_${instrumento}`;
        const elemento = document.querySelector(idAudio);
        if (elemento && elemento.localName === 'audio') {
            elemento.play();
        } else {
            console.log('Elemento não encontrado ou seletor inválido');
        }
    }

    tecla.onclick = tocaSom;
    tecla.onkeydown = function(event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            tecla.classList.add('ativa');
        }
    };
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    };
}