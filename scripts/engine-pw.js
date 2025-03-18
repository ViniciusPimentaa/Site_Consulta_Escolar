

function textoAlerta() {
    let campoInput = document.querySelector(".login__input");
    let validacaoEmail = campoInput.value.trim();

    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão Regular...

    if (validacaoEmail === '') {
        alert('O campo *E-mail* não foi preenchido!')
    } else if (!emailValido.test(validacaoEmail)) {
        alert('E-mail inválido. Digite um e-mail válido. Ex: usuario@email.com')
        campoInput.value = ''; // Limpa o campo...
    } else {
        document.getElementById("mensagem").textContent = "Instruções enviadas!";
        document.getElementById("mensagem").style.marginTop = "-10px";
        alert('E-mail enviado com sucesso! Verifique sua caixa de span e lixo eletrônico!')
    }

    
}

document.querySelector(".button__enter").addEventListener("click", textoAlerta);