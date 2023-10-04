/* Script localização */
function consultaLocalizacao(){
    let cep = document.querySelector("#input-cep").value;
    if (cep.length != 8) {
        alert("CEP inválido, o CEP precisa conter 8 digítos")
        return;
    }
    let url = 'https://viacep.com.br/ws/'+ cep +'/json/';
    console.log(url);
    fetch(url).then(function(response){
        response.json().then(function(data){
            console.log(data);
            mostrarLocalidade(data);
        });
    });
}

function mostrarLocalidade(dados){
    let nomeLocalizacao = document.querySelector(".nome-localizacao");
    let localidadeUf = dados.localidade + ", " + dados.uf

    if(dados.erro){
        alert("CEP não encontrado");
    }else{
        dados.localidade;
        nomeLocalizacao.innerHTML = localidadeUf;
        let inputCep = document.querySelector("#input-cep");
        let botaoLocalizacao = document.querySelector("#botao-localizacao");
        inputCep.style.display = "none";
        botaoLocalizacao.style.display = "none";
    }    
}