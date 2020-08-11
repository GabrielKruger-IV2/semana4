var nome = document.getElementById('nome');
var cpf = document.getElementById('cpf');
var rg = document.getElementById('rg');
var dtNasc = document.getElementById('dtNasc');
var cnh = document.getElementById('')
var estCivil = document.getElementById('');
var rua = document.getElementById('rua');
var bairro = document.getElementById('bairro');
var cidade = document.getElementById('cidade');
var estado = document.getElementById('estado');
var numero = document.getElementById('numero');
var complemento = document.getElementById('complemento');

var btn = document.getElementById('btnCadastrar');
btn.addEventListener('click',function(){


})

function evento(){
    if(nome.value =="" || cpf.value == "" || rg.value == "" || dtNasc.value == "" || rua.value == "" ||bairro.value == "" || cidade.value == "" || estado.value == "" ||numero.value == ""|| complemento.value == ""){
        alert('Algum campo ficou vazio');
    }
    if(nome.value == ""){
       nome.placeholder="Preencha o nome";
    }
    if(cpf.value == ""){
       cpf.placeholder="Preencha o cpf";
    }
    if(rg.value == ""){
       rg.placeholder="Preencha o RG";
    }
    if(dtNasc.value == ""){
       dtNasc.placeholder="Preencha a sua data de nascimento";
    }
    if(rua.value == ""){
        rua.placeholder="Preencha a sua rua";
    }
    if(bairro.value == ""){
       bairro.placeholder="Preencha o seu bairro";
    }
    if(cidade.value == ""){
       cidade.placeholder="Preencha a sua cidade";
    }
    if(estado.value == ""){
        estado.placeholder="Preencha o seu estado";
    }
    if(numero.value == ""){
        numero.placeholder="Preencha o numero da sua casa";
    }
    if(complemento.value == ""){
        complemento.placeholder="Preencha o complemento";
    }



}