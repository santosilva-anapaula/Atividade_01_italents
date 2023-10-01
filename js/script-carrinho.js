let modal = document.querySelectorAll(".carrinho-container-produto");
let excluir = document.querySelectorAll(".bi-trash3");

for(let i=0; i < excluir.length; i++){
    excluir[i].addEventListener("click", function(event){
        if(event.target.classList.contains("bi-trash3")){
            console.log(modal[i]);
            modal[i].remove();
        }
    })
}