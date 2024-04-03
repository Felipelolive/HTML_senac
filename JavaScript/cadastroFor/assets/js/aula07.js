let vetor = []
for (let posicao = 0; posicao < vetor.length; posicao++) {
    console.log(vetor[posicao])
}

let formcontato = document.getElementById("form-contato");
let divLista = document.getElementById("lista");
let nome = [];
let email = [];
let telefone = [];
let assunto = [];
let msg = [];
//inserindo dados no arrays
formcontato.addEventListener("submit", (event) => {
    event.preventDefault();

    nome.push(formcontato.nome.value);
    email.push(formcontato.email.value);
    telefone.push(formcontato.telefone.value);
    assunto.push(formcontato.assunto.value);
    msg.push(formcontato.mensagem.value);
    gerarLista();
})

function gerarLista() {
    let auxLista = "";

    for (let posicao = 0; posicao < nome.length; posicao++) {
        auxLista += `<div class="card">
                        <div class="dados-label">
                            <div>Nome completo:</div>
                            <div>${nome[posicao]}</div>
                        </div>
                           
                         <div class="dados-label">
                             <div>E-mail:</div>
                             <div>${email[posicao]}</div>
                         </div>

                        <div class="dados-label">
                             <div>Telefone:</div>
                             <div>${telefone[posicao]}</div>
                        </div>

                        <div class="dados-label">
                            <div>Assunto:</div>
                            <div>${assunto[posicao]}</div>
                        </div>

                        <div class="dados-label">
                            <div>Mensagem:</div>
                            <div>${msg[posicao]}</div>
                         </div>
                    </div>`
                    
    }
    divLista.innerHTML = auxLista;
}