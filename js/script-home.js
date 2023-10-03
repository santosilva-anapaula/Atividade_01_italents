let inputPesquisa = document.querySelector("#input-text");
let nomeProdutos = document.querySelectorAll(".nome-produto");

inputPesquisa.addEventListener("input", function (event) {
    let textoDigitado = inputPesquisa.value.toLowerCase();

    nomeProdutos.forEach(function (nome) {
        let nomeProduto = nome.textContent.toLowerCase();
        let cardProduto = nome.parentElement;

        if (nomeProduto.includes(textoDigitado)) {
            cardProduto.classList.remove("escondido");
        } else {
            cardProduto.classList.add("escondido");
        }
    });
});

/* Avaliação */ 
let handsUp = document.querySelector(".bi-hand-thumbs-up-fill");
let handsDown = document.querySelector(".bi-hand-thumbs-down-fill");

handsUp.addEventListener("click", function(event){
    if (event.target.nodeName === "I"){
        event.target.classList.toggle("green");
        handsDown.classList.remove("red");
    }
})

handsDown.addEventListener("click", function(event){
    if (event.target.nodeName === "I"){
        event.target.classList.toggle("red");
        handsUp.classList.remove("green");
    }
})