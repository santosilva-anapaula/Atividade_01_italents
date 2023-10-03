let btnCadastraProduto = document.querySelector("#btn-cadastro-produto");

btnCadastraProduto.addEventListener("click", function(){
    let formularioProduto = document.querySelector("#cadastro-produto");

    if (formularioProduto.checkValidity()) {
        alert("Cadastro Realizado");
    }
});