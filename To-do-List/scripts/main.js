// DOM Elements: elementos do HTML
const addTarefaBtn = document.getElementById('addTaskBtn');
const limparTarefaBtn = document.getElementById('cleanTaskBtn');
const feitoBtn = document.getElementsByClassName('completeTaskBtn');
const naoFeitoBtn = document.getElementsByClassName('removeTaskBtn');
const modoEscuroBtn = document.getElementById('toggleTheme');
const tarefaInput = document.getElementById('taskInput');
const listaDeTask = document.getElementById('taskList');
// Array com a lista das Tarefas:
let tarefas = []
// Funções principais: adicionar, remover, completar, limpar:
function adicionarTarefa() {
 //------------------- Validando se o Input está vazio ---------------------------
    const tarefaTexto = tarefaInput.value.trim();
    if (tarefaTexto === "") {
        tarefaInput.placeholder = "Escreva Alguma Coisa";
        return;
    };
    if (tarefas.some(t => t.texto === tarefaTexto)) {
        tarefaInput.placeholder = "Tarefa já existe!";
        tarefaInput.value = "";
        setTimeout(() => {
        tarefaInput.placeholder = "Tarefa Nova";
        }, 3000);
        return;
    };
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
// -------------------- Remove do array e atualiza localStorage ------------------
    tarefas = tarefas.filter(t => t.texto !== tarefaTexto);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }, 300);
    };
 // ------------------- Adicionando a task e os botões ---------------------------
    divBotoes.appendChild(botaoConcluir);
    divBotoes.appendChild(botaoRemover);
    li.appendChild(p);
    li.appendChild(divBotoes);
    const lista = document.getElementById("taskList");
    lista.prepend(li);
 // ------------------- Adicionando a task na lista ------------------------------
    tarefas.unshift({ texto: tarefaTexto, concluida: false });
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
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
    tarefas = [];
    localStorage.removeItem("tarefas");
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
};

function carregarTarefas() {
 // ------------------- Pegando os dados salvos no Local Storage -------------------
    const tarefasSalvas = localStorage.getItem("tarefas");
 // ------------------- Verifica se há algo salvo no Local Storage -----------------
    if (tarefasSalvas) {
        tarefas = JSON.parse(tarefasSalvas);
 // ------------------- Para cada tarefa salva, criar os elementos novamente -------
        tarefas.forEach(tarefa => {
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.textContent = tarefa.texto;
 // ------------------- Se a tarefa estiver concluída, aplica estilos --------------
            if (tarefa.concluida) {
                li.classList.add("concluida");
                p.style.textDecoration = "line-through";
            }
 // ------------------- Criação da div de botões -----------------------------------
            const divBotoes = document.createElement("div");
            divBotoes.classList.add("buttons-taskList");
 // ------------------- Criação do botão de concluir tarefa ------------------------
            const botaoConcluir = document.createElement("button");
            botaoConcluir.classList.add("completeTaskBtn");
            botaoConcluir.textContent = "✓";
            botaoConcluir.onclick = function () {
                const jaConcluido = li.classList.contains("concluida");
                li.classList.toggle("concluida");
                p.style.textDecoration = jaConcluido ? "none" : "line-through";
 // ------------------- Atualiza o status no array e salva novamente ---------------
                tarefa.concluida = !jaConcluido;
                localStorage.setItem("tarefas", JSON.stringify(tarefas));
            };
 // ------------------- Criação do botão de remover tarefa -------------------------
            const botaoRemover = document.createElement("button");
            botaoRemover.classList.add("removeTaskBtn");
            botaoRemover.textContent = "X";
            botaoRemover.onclick = function () {
                li.classList.add('removendo');
                setTimeout(() => {
                    li.remove();
 // ------------------- Remove a tarefa do array e salva novamente -----------------
                    tarefas = tarefas.filter(t => t.texto !== tarefa.texto);
                    localStorage.setItem("tarefas", JSON.stringify(tarefas));
                }, 300);
            };
 // ------------------- Montando a estrutura do item na lista ----------------------
            divBotoes.appendChild(botaoConcluir);
            divBotoes.appendChild(botaoRemover);
            li.appendChild(p);
            li.appendChild(divBotoes);
            listaDeTask.appendChild(li);
        });
    }
};

function adicionarTarefaComEnter(event) {
 // ------------------- Função para adicionar tarefa ao apertar Enter -------------------
    if (event.key === "Enter") {
        adicionarTarefa();
    }
};
// Eventos: onclick, onkeypress, etc
addTarefaBtn.addEventListener('click', adicionarTarefa);
limparTarefaBtn.addEventListener('click', limparTudo);
modoEscuroBtn.addEventListener('click', trocarModo);
tarefaInput.addEventListener('keydown', adicionarTarefaComEnter);
// Inicialização: carregar do localStorage ao abrir
carregarTarefas();

