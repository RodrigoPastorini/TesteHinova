var nomeCadastro ;
var dataNascimentoCadastro;
var idadeCadastro;
var cepCadastro;
var ruaCadastro;
var bairroCadastro;
var estadoCadastro;
var cidadeCadastro;
var ufCadastro;
var ibgeCadastro;




$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#cep").blur(function() {
        var cep = $(this).val().replace(/\D/g, '');

        if (cep != "") {

            var validacep = /^[0-9]{8}$/;

            if(validacep.test(cep)) {

                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");
                $("#ibge").val("...");

                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        $("#ibge").val(dados.ibge);
                    } 
                    else {
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } 
            else {
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        }
        else {
            limpa_formulário_cep();
        }
    });
});

function calculateAnos () {
    var dataNasc =document.getElementById('anos').value;
    var data = new Date(dataNasc);                         
    var difmes = Date.now() - data.getTime();
    var difid = new Date(difmes);
    var ano = difid.getUTCFullYear();
    var idade =Math.abs(ano -1970);
      
    document.getElementById('idade').value =idade;
}

function registraCadastro(){
    nomeCadastro = document.getElementById("nomePessoa").value;
    localStorage.setItem("Nome",nomeCadastro);
    dataNascimentoCadastro= document.getElementById("anos").value;
    localStorage.setItem("Nasci",dataNascimentoCadastro);
    idadeCadastro = document.getElementById("idade").value;
    localStorage.setItem("Idade",idadeCadastro);
    cepCadastro = document.getElementById("cep").value;
    localStorage.setItem("Cep",cepCadastro);
    bairroCadastro = document.getElementById("bairro").value;
    localStorage.setItem("bairro",bairroCadastro);
    ruaCadastro = document.getElementById("rua").value;
    localStorage.setItem("rua",ruaCadastro);
    cidadeCadastro = document.getElementById("cidade").value;
    localStorage.setItem("cidade",cidadeCadastro);
    estadoCadastro = document.getElementById("uf").value;
    localStorage.setItem("uf",estadoCadastro);
    ibgeCadastro = document.getElementById("ibge").value;
    localStorage.setItem("ibge",ibgeCadastro);
}

function preencheCadastro(){
    document.getElementById("nomePessoa").value= localStorage.getItem("Nome");
    document.getElementById("anos").value  =localStorage.getItem("Nasci");
    document.getElementById("idade").value = localStorage.getItem("Idade");
    document.getElementById("cep").value = localStorage.getItem("Cep");
    document.getElementById("bairro").value= localStorage.getItem("bairro");
    document.getElementById("rua").value = localStorage.getItem("rua");
    document.getElementById("cidade").value = localStorage.getItem("cidade");
    document.getElementById("uf").value = localStorage.getItem("uf");
    document.getElementById("ibge").value = localStorage.getItem("ibge");
}