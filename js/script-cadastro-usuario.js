let btnCadastraUsuario = document.querySelector("#cadastro-botao");

btnCadastraUsuario.addEventListener("click", function(){
    let formularioUsuario = document.querySelector("#cadastro-usuario");

    if (formularioUsuario.checkValidity()) {
        alert("Cadastro Realizado");
    }
});