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
    if (nome.value == "" && cpf.value == "" && rg.value == "" && dtNasc.value == "" && rua.value == "" && bairro.value == "" && cidade.value == "" && estado.value == "" && numero.value == "" && complemento.value == "" && cnh.options[cnh.selectedIndex].value == "0" && estCivil.options[cnh.selectedIndex].value == "0") {
        alert('Todos os campos não foram preenchidos');
        nome.placeholder = "Preencha o nome";
        cpf.placeholder = "Preencha o cpf";
        rg.placeholder = "Preencha o RG";
        dtNasc.placeholder = "Preencha a sua data de nascimento";
        rua.placeholder = "Preencha a sua rua";
        bairro.placeholder = "Preencha o seu bairro";
        cidade.placeholder = "Preencha a sua cidade";
        estado.placeholder = "Preencha o seu estado";
        numero.placeholder = "Preencha o numero da sua casa";
        complemento.placeholder = "Preencha o complemento";
    }else{
        if(nome.value == "" && cpf.value == "" && rg.value == "" && dtNasc.value == ""){
            alert('Esta faltando suas informações');
            nome.placeholder = "Preencha o nome";
            cpf.placeholder = "Preencha o cpf";
            rg.placeholder = "Preencha o RG";
            dtNasc.placeholder = "Preencha a sua data de nascimento";
        }else{
            if(rua.value == "" && bairro.value == "" && cidade.value == "" && estado.value == "" && numero.value == "" && complemento.value == ""){
                alert('Esta faltando seu endereço');
                bairro.placeholder = "Preencha o seu bairro";
                cidade.placeholder = "Preencha a sua cidade";
                estado.placeholder = "Preencha o seu estado";
                numero.placeholder = "Preencha o numero da sua casa";
                complemento.placeholder = "Preencha o complemento";
            }else{
                if(cnh.options[cnh.selectedIndex].value == "0" && estCivil.options[estCivil.selectedIndex].value == "0"){
                    alert('Selecione as opções da sua CNH e seu estado Civil');
                }else{
                    if(nome.value == ""){
                        alert('Preencha o seu nome');
                        nome.placeholder = "Preencha o nome";
                    }else{
                        if(cpf.value == ""   ){
                            alert('CPF não preenchido');
                            cpf.placeholder = "Preencha o cpf dessa forma: 123.456.789-00";

                        }else{
                            if(rg.value == "" ||  rg.length.value < 12){
                                alert('RG não preenchido');
                                cpf.placeholder = "Preencha o cpf dessa forma: 12.345.678-9";
                            }else{
                                if(dtNasc.value == "" ){
                                    alert('Data de nascimento não preenchida ');
                                    dtNasc.placeholder = "Preencha a sua data de nascimento: XX/XX/XX";
                                }else{
                                    if(rua.value == ""){
                                        alert('Rua não preenchida ');
                                        rua.placeholder = "Preencha com o nome da sua rua";
                                    }else{
                                        if(bairro.value == "" ){
                                            alert('Bairro não preenchido ');
                                            bairro.placeholder = "Preencha com o nome do seu bairro";
                                        }else{
                                            if(cidade.value == ""){
                                                alert('Cidade não preenchida ');
                                                cidade.placeholder = "Preencha com o nome da sua cidade";
                                            }else{
                                                if(estado.value == ""){
                                                    alert('Estado não preenchido ');
                                                    estado.placeholder = "Preencha com o nome do seu estado";
                                                }else{
                                                    if(numero.value == ""){
                                                        alert('Numero não preenchido ');
                                                        numero.placeholder = "Preencha com o numero da sua casa";
                                                    }else{
                                                        if(complemento.value == "" ){
                                                            alert('Complemento não preenchido ');
                                                            complemento.placeholder = "Preencha com o complemento da sua casa ";
                                                        }else{
                                                            if(cnh.options[cnh.selectedIndex].value == "0"){
                                                                alert('Tipo de CNH não escolhida ');
                                                                
                                                            }else{
                                                                if(estCivil.options[estCivil.selectedIndex].value == "0"){
                                                                    alert('Estado civil não escolhido ');
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

}