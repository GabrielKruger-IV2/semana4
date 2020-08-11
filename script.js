var nome = document.getElementById('nome');
var cpf = document.getElementById('cpf');
var rg = document.getElementById('rg');
var dtNasc = document.getElementById('dtNasc');
var cnh = document.getElementById('cnh')
var estCivil = document.getElementById('estCivil');
var rua = document.getElementById('rua');
var bairro = document.getElementById('bairro');
var cidade = document.getElementById('cidade');
var estado = document.getElementById('estado');
var numero = document.getElementById('numero');
var complemento = document.getElementById('complemento');

const cpfEstilo = document.getElementById('cpf');
var cont = 0;
cpfEstilo.addEventListener("input", function () {
    cont += 1;
    var value = this.value;

    if (value.length == 0) cont = 0;
    if (value.length == 1) cont = 1;

    if (cont == 3) {
        this.value += ".";

    }
    if (cont == 6) {
        this.value += ".";
    }
    if (cont == 9) {
        this.value += "-";

    }
});
const rgEstilo = document.getElementById('dtNasc');
var cont3 = 0;
rgEstilo.addEventListener("input", function () {
    cont3 += 1;
    var value = this.value;

    if (value.length == 0) cont3 = 0;
    if (value.length == 1) cont3 = 1;

    if (cont3 == 2) {
        this.value += "/";

    }
    if (cont3 == 4) {
        this.value += "/";
    }

});
const dtEstilo = document.getElementById('rg');
var cont2 = 0;
dtEstilo.addEventListener("input", function () {
    cont2 += 1;
    var value = this.value;

    if (value.length == 0) cont2 = 0;
    if (value.length == 1) cont2 = 1;

    if (cont2 == 2) {
        this.value += ".";

    }
    if (cont2 == 5) {
        this.value += ".";
    }
    if (cont2 == 8) {
        this.value += "-";

    }
});

function evento() {
    if (nome.value == "" || cpf.value == "" || rg.value == "" || dtNasc.value == "" || rua.value == "" || bairro.value == "" || cidade.value == "" || estado.value == "" || numero.value == "" || complemento.value == "" || cnh.options[cnh.selectedIndex].value == "0" || estCivil.options[cnh.selectedIndex].value == "0") {
        alert('Algum campo ficou vazio');
    }
    if (nome.value == "") {
        nome.placeholder = "Preencha o nome";
    }
    if (cpf.value == "") {
        cpf.placeholder = "Preencha o cpf";
    }
    if (rg.value == "") {
        rg.placeholder = "Preencha o RG";
    }
    if (dtNasc.value == "") {
        dtNasc.placeholder = "Preencha a sua data de nascimento";
    }
    if (rua.value == "") {
        rua.placeholder = "Preencha a sua rua";
    }
    if (bairro.value == "") {
        bairro.placeholder = "Preencha o seu bairro";
    }
    if (cidade.value == "") {
        cidade.placeholder = "Preencha a sua cidade";
    }
    if (estado.value == "") {
        estado.placeholder = "Preencha o seu estado";
    }
    if (numero.value == "") {
        numero.placeholder = "Preencha o numero da sua casa";
    }
    if (complemento.value == "") {
        complemento.placeholder = "Preencha o complemento";
    }

}