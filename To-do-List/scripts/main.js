// DOM Elements: elementos do HTML
const addTarefaBtn = document.getElementById('addTaskBtn');
const limparTarefaBtn = document.getElementById('cleanTaskBtn');
const feitoBtn = document.getElementsByClassName('completeTaskBtn');
const naoFeitoBtn = document.getElementsByClassName('removeTaskBtn');
const modoEscuroBtn = document.getElementById('toggleTheme');
const tarefaInput = document.getElementById('taskInput');
const listaDeTask = document.getElementById('taskList');
// Funções principais: adicionar, remover, completar, limpar:
function adicionarTarefa() {
 //------------------- Validando se o Input está vazio ---------------------------
    const tarefaTexto = tarefaInput.value.trim();
    if (tarefaTexto === "") {
        tarefaInput.placeholder = "Escreva Alguma Coisa";
        return;
    }
 // ------------------- Criação de constantes "li", "p", "Div"--------------------
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = tarefaTexto;
    const divBotoes = document.createElement("div");
    divBotoes.classList.add("buttons-taskList");
 // ------------------- Criação do botão de concluir a task ----------------------
    const botaoConcluir = document.createElement("button");
    botaoConcluir.classList.add("completeTaskBtn");
    botaoConcluir.textContent = "✓"
    botaoConcluir.onclick = function () {
        const jaConcluido = li.classList.contains("concluida");
        li.classList.toggle("concluida");
        p.style.textDecoration = jaConcluido ? "none" : "line-through";
    };
 // ------------------- Criação do botão de remover a task -----------------------
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("removeTaskBtn");
    botaoRemover.textContent = "X";
    botaoRemover.onclick = function () {
    li.classList.add('removendo');
    setTimeout(() => {
        li.remove();
    }, 300);
};
 // ------------------- Adicionando a task e os botões ---------------------------
    divBotoes.appendChild(botaoConcluir);
    divBotoes.appendChild(botaoRemover);
    li.appendChild(p);
    li.appendChild(divBotoes);
    const lista = document.getElementById("taskList");
    lista.prepend(li);
 // ------------------- Limpando o Input após adicionar a task -------------------
    tarefaInput.value = "";
    tarefaInput.placeholder = "Tarefa Nova";
};

function limparTudo() {
 // ------------------- Verifica Se Já Limpou Tudo -------------------------------
    const listaDeTarefas = document.getElementsByTagName('li');
    if (listaDeTarefas.length == 0) {
        tarefaInput.placeholder = "Já está tudo Limpo";
        setTimeout (function() {
            tarefaInput.placeholder = "Tarefa Nova";
        }, 4000);
        return;
    }
 // ------------------- Remove Cada Item Da Lista --------------------------------
    [...listaDeTarefas].forEach(item => {
        item.remove()
    });
};

function trocarModo() {
    const darkModeBtn = document.getElementById('body');
    const trocarModoBtn = document.getElementById('toggleTheme');
    darkModeBtn.classList.toggle("dark-mode");
    if (darkModeBtn.classList.contains('dark-mode')) {
        trocarModoBtn.innerHTML = "☀️ Modo Claro"
    }
    else {
        trocarModoBtn.innerHTML = "🌙 Modo Escuro"
    }
}
// Eventos: onclick, onkeypress, etc
addTarefaBtn.addEventListener('click', adicionarTarefa);
limparTarefaBtn.addEventListener('click', limparTudo);
modoEscuroBtn.addEventListener('click', trocarModo);
// Inicialização: carregar do localStorage ao abrir
