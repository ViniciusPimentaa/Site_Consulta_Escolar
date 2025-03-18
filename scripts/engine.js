let cideValidacao = "452918";
let senhaValidacao = "Escola21?";


function verificacaoLogin() {
    let cideFornecida = document.querySelector(".login__input");
    let senhaFornecida = document.querySelector(".pw__input");

    let cideValor = cideFornecida.value.trim();
    let senhaValor = senhaFornecida.value.trim();


    if (cideValor === cideValidacao && senhaValor === senhaValidacao) {
        window.location.href = "pages/dashboard-alunos.html";
    } else {
        if (cideValor === '' && senhaValor === '') {
            alert('Os campos CIDE ou SENHA estão vazios!');
        } else if (cideValor === '') {
            alert('O campo CIDE está vazio.')
        } else if (senhaValor === '') {
            alert('O campo SENHA está vazio.')
        } else {
            alert('CIDE e SENHA não estão cadastrados.')
        }

        cideFornecida.value = '';
        senhaFornecida.value = '';
    }
}