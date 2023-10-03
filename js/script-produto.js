let coracao = document.querySelector(".bi-heart-fill");
coracao.addEventListener("click", function(event) {
    if(event.target.nodeName === "I"){
        event.target.classList.toggle("red")
    }
})

//Incrementar e decrementar quantidade de produtos
let decrementar = document.querySelector(".bi-dash-square");
let incrementar = document.querySelector(".bi-plus-square");

let textoProduto = document.querySelector(".produto-numero-quantidade");
let quantidadeProduto = parseInt(textoProduto.textContent);

incrementar.addEventListener("click", function(){
    quantidadeProduto++;
    textoProduto.innerHTML = quantidadeProduto;
});

decrementar.addEventListener("click", function(){
    if(quantidadeProduto <= 1){
        alert("Aquantidade de produto não pode ser menor que 1!")
    }else{
        quantidadeProduto--;
        textoProduto.innerHTML = quantidadeProduto;
    }
});

/* Script Adicionar ao carrinho */
btnCarrinho = document.querySelector("#produto-botao");

btnCarrinho.addEventListener("click", function(){
    alert("Produto adicionado ao carrinho");
});