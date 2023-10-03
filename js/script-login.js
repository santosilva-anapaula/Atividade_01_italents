let btnAdd = document.querySelector(".login-botao");

btnAdd.addEventListener("click", function(){
    let inputLogin = document.querySelector("#login").value;
    let inputPassword = document.querySelector("#password").value;
    if(inputLogin === "" || inputPassword === ""){
        alert("Você não preencheu os campos!")
    }else{
        //alert("Login realizado com sucesso")
        document.querySelector("#mesagem-login").insertAdjacentHTML(
            "afterend",
            "<div class='card-teste'><span>Login efetuado com sucesso!</span></div>"
        );

        let mensagem = document.querySelector(".card-teste");
        setTimeout(() => {
            mensagem.style.display = "none";
        }, 3000);
    }

    document.querySelector("#login").value = "";
    document.querySelector("#password").value = "";      
});