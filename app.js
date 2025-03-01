//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = []; 

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo"); // Captura o input
    let nome = inputNome.value.trim(); // Remove espaços extras

    if (nome === "") { // Validação de entrada
        alert("Por favor, insira um nome.");
        return;
    }

    nomes.push(nome); // Adiciona ao array
    atualizarLista(); // Atualiza a lista na tela
    inputNome.value = ""; // Limpa o campo de entrada
}

function atualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos"); 
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    nomes.forEach((nome, index) => {
        let li = document.createElement("li");
        li.textContent = nome;

        // Botão para remover um nome
        let btnRemover = document.createElement("button");
        btnRemover.textContent = "❌";
        btnRemover.classList.add("remove-button");
        btnRemover.onclick = () => removerAmigo(index);

        li.appendChild(btnRemover);
        listaAmigos.appendChild(li);
    });
}

function removerAmigo(index) {
    nomes.splice(index, 1); // Remove pelo índice
    atualizarLista(); // Atualiza a lista na tela
}