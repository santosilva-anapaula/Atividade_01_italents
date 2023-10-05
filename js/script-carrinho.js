let modal = document.querySelectorAll(".carrinho-container-produto");
let excluir = document.querySelectorAll(".bi-trash3");

for(let i=0; i < excluir.length; i++){
    excluir[i].addEventListener("click", function(event){
        if(event.target.classList.contains("bi-trash3")){
            console.log(modal[i]);
            modal[i].remove();
        }
    });
}

/* Script Produto */
let decrementar = document.querySelectorAll(".bi-dash-square");
let incrementar = document.querySelectorAll(".bi-plus-square");

let textoProduto = document.querySelectorAll(".numero-quantidade");
let quantidadeProduto = [];

let textoValorProduto = document.querySelectorAll(".valor-produto");
let valorProduto = [];

for(let i=0; i < incrementar.length; i++){
    quantidadeProduto[i] = parseInt(textoProduto[i].textContent);

    incrementar[i].addEventListener("click", function() {
        quantidadeProduto[i]++;
        textoProduto[i].textContent = quantidadeProduto[i];
    });

    decrementar[i].addEventListener("click", function() {
        if (quantidadeProduto[i] <= 1) {
            alert("A quantidade de produto não pode ser menor que 1!")
        }else{
            quantidadeProduto[i]--;
            textoProduto[i].textContent = quantidadeProduto[i];
        }        
    });
}

/* Script Cupom */
let btnCupom = document.querySelector(".cupom-botao");

btnCupom.addEventListener("click", function(){
    let inputCupom = document.querySelector("#cupom-input");

    if(inputCupom.value !== ''){
        document.querySelector("#cupons-aplicados").insertAdjacentHTML(
            "beforeend",
            "<p class='menssagem-cupom'>Cupom aplicado!</p>"
        );

        let mensagemCupom = document.querySelector(".menssagem-cupom");
        setTimeout(() => {
            mensagemCupom.style.display = "none";
        }, 3000)
    }    
});

/* Script Pagamento */
let btnPagamento =  document.querySelector(".carrinho-pagamento");
btnPagamento.addEventListener("click", function(){
    alert("Carregando informações de pagamento");
});