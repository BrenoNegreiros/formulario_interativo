// Selecionando elementos
const formulario = document.getElementById("formulario");

const nome = document.getElementById("nome");

const email = document.getElementById("email");

const mensagemSucesso = document.getElementById("mensagem-sucesso");


// Evento de envio
formulario.addEventListener("submit", (event) => {

    // Impede recarregar página
    event.preventDefault();

    // Validação
    validarFormulario();

});


// Função principal
function validarFormulario(){

    let formularioValido = true;

    // ===== NOME =====
    if(nome.value.trim() === ""){

        mostrarErro(
            nome,
            "O nome completo é obrigatório."
        );

        formularioValido = false;

    }else if(nome.value.trim().length < 5){

        mostrarErro(
            nome,
            "Digite o nome completo corretamente."
        );

        formularioValido = false;

    }else{

        mostrarSucesso(nome);

    }


    // ===== EMAIL =====
    if(email.value.trim() === ""){

        mostrarErro(
            email,
            "O e-mail é obrigatório."
        );

        formularioValido = false;

    }else if(!validarEmail(email.value)){

        mostrarErro(
            email,
            "Digite um e-mail válido."
        );

        formularioValido = false;

    }else{

        mostrarSucesso(email);

    }


    // Mensagem final
    if(formularioValido){

        mensagemSucesso.innerText =
            "Formulário enviado com sucesso!";

        formulario.reset();

    }else{

        mensagemSucesso.innerText = "";

    }

}


// Mostrar erro
function mostrarErro(input, mensagem){

    const campo = input.parentElement;

    const small = campo.querySelector("small");

    small.innerText = mensagem;

    campo.className = "campo erro";

}


// Mostrar sucesso
function mostrarSucesso(input){

    const campo = input.parentElement;

    const small = campo.querySelector("small");

    small.innerText = "";

    campo.className = "campo sucesso";

}


// Validar email
function validarEmail(email){

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}