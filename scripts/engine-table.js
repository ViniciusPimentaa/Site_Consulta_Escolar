const tableLines = document.querySelectorAll("#tabela tbody tr");
const trimestreElement = document.querySelectorAll(".first__p");

function definirTrimestre() {
    const mesAtual = new Date().getMonth() + 1;

    let trimestre;

    if (mesAtual >= 1 && mesAtual <= 3) {
        trimestre = "Primeiro Trimestre";
    } else if (mesAtual >=4 && mesAtual <= 6) {
        trimestre = "Segundo Trimestre";
    } else if (mesAtual >=7 && mesAtual <=9) {
        trimestre = "Terceiro Trimestre";
    } else {
        trimestre = "Quarto Trimestre";
    }

    trimestreElement.textContent = trimestre; // Atualiza o nosso <p>...
}

function gerandoNota() {
    return (Math.random() *9 + 1).toFixed(1) // Gera o número aleátorio com 1 casa após a vírgula...
}

tableLines.forEach(itemLine => {
    const columNota = itemLine.children[1]; // Seleciona a coluna NOTA...
    const columSituacao = itemLine.children[2]; // Seleciona a coluna SITUAÇÃO... 

    const notaStudent = parseFloat(gerandoNota());
    columNota.textContent = notaStudent;


    if (notaStudent >=7) {
        columSituacao.textContent = "Aprovado";
        columSituacao.style.color = "white";
    } else {
        columSituacao.textContent = "Reprovado";
        columSituacao.style.color = "white";
    }

});
