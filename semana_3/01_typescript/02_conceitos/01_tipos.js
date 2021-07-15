"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
// String
var nome = 'Luciano Pastine';
// Array
var idades = [23, 28, 45, 32, 45];
var idades2 = [23, 28, 45, 32, 45];
// Tuple
var jogadores;
jogadores = ['Luciano', 3, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoDaApi = [123, 'Luciano', false];
var retornoDaApi2 = {
// .......
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    // ......
}
criar({
    propriedade: 1,
});
// criar('Luciano') // Dá erro
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types | Poder ter um tipo ou outro
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
// type Funcionarios = Array<Funcionario>
var funcionarios = [{
        nome: 'Luciano',
        sobrenome: 'Pastine',
        dataNascimento: new Date()
    }, {
        nome: 'Karla',
        sobrenome: 'Pastine',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
// Nulos ou Opcionais
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Luciano',
    telefone1: '123456'
};
// Type Assertion
var minhaIdade = 25;
minhaIdade.toString();
// (<number>minhaIdade).toString()
// const input = document.getElementById('numero1') as HTMLInputElement
var input = document.getElementById('numero1');
console.log(input.value);
function getUser() {
    return {
        nome: 'Luciano',
        email: 'lucianopastine.tech@gmail.com'
    };
}
function setUser(usuario) {
    // ...
}
