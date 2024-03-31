
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let telefone = document.getElementById('telefone');
let assunto = document.getElementById('assunto');
let mensagem = document.getElementById('mensangem');
let btnenviar = document.getElementById("btnenviar");

btnenviar.addEventListener("click" , function (){
    document.getElementById('fnome').innerHTML= nome.value;
    document.getElementById('femail').innerHTML= email.value;
    document.getElementById('ftelefone').innerHTML = telefone.value;
    document.getElementById('fassunto').innerHTML = assunto.value;
    document.getElementById('fmensagem').innerHTML = mensagem.value;
});