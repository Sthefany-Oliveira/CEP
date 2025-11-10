//FUNÇÃO PRINCIPAL DO SISTEMAS

function buscarCep(event) {
    event.preventDefault(); //Função que impede o recarregamento da página

    //estamos acessando o cep
    let cep = document.getElementById("input-cep").value

    //colocando uma mensagem de carregamento
    document.getElementById("resultado").innerText = "Carregando"

    // faz a requesição da API atraves do link
    //ele busca o cep em que vc busca 
    fetch("https://viacep.com.br/ws/" + cep + "/json/")

        // then-promessa tem quer ter o (.) para chamar 
        .then(resposta => resposta.json())

        .then(dados => {
            //'dados' contem todas as informaçoes do endereço de acordo com seu cep

            //informaçoes dos dados
            if (dados.erro) {
                document.getElementById("resultado").innerHTML = "<strong> Cep não encontrado <strong>"
            }

            document.getElementById("resultado").innerHTML =
            `<h3>Endereço Encontrado:<h3>
        <p> Rua: ${dados.logradouro}<p>
       <p> Bairro: ${dados.bairro}<p>
       <p> Estado: ${dados.estado}<p>
       <p> Regiao: ${dados.regiao}<p> `

        })

        //caso perca a conexao com a internet
        .catch(() =>{
            document.getElementById("resultado").innerHTML= "Erro ao buscar cep"
        } )
}


