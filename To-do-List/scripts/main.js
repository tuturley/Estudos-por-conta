// DOM Elements: elementos do HTML
const addTarefaBtn = document.getElementById('addTaskBtn');
const limparTarefaBtn = document.getElementById('cleanTaskBtn');
const feitoBtn = document.getElementsByClassName('completeTaskBtn');
const naoFeitoBtn = document.getElementsByClassName('removeTaskBtn');
const modoEscuro = document.getElementById('toggleTheme');
const tarefaInput = document.getElementById('taskInput');
// Variáveis: ex. lista de tarefas

// Funções principais: adicionar, remover, completar, limpar
function adicionarTarefa() {
    const tarefaTexto = tarefaInput.value.trim();
    if (tarefaTexto === "") {
        tarefaInput.placeholder = "Escreva Alguma Coisa";
        return;
    }
    const li = document.createElement("li");

    const p = document.createElement("p");
    p.textContent = tarefaTexto;

    const divBotoes = document.createElement("div");
    divBotoes.classList.add("buttons-taskList");

    const botaoConcluir = document.createElement("button");
    botaoConcluir.classList.add("completeTaskBtn");
    botaoConcluir.textContent = "✓"
    botaoConcluir.onclick = function () {
        p.style.textDecoration = p.style.textDecoration === "line-through" ? "none" : "line-through";
    };

    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("removeTaskBtn");
    botaoRemover.textContent = "X";
    botaoRemover.onclick = function () {
        li.remove();
    };

    divBotoes.appendChild(botaoConcluir);
    divBotoes.appendChild(botaoRemover);
    li.appendChild(p);
    li.appendChild(divBotoes);

    const lista = document.getElementById("taskList");
    lista.prepend(li);

    tarefaInput.value = "";
    tarefaInput.placeholder = "Tarefa Nova";
    };
// Eventos: onclick, onkeypress, etc
addTarefaBtn.addEventListener('click', adicionarTarefa);
// Inicialização: carregar do localStorage ao abrir
