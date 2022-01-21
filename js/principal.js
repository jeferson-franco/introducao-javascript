/*
HTML DOM querySelector() Method.
valor de retorno: o primeiro elemento que corresponde aos seletores CSS.
se nenhuma correspondência for encontrada, null será retornado.
lança uma exceção SYNTAX_ERR se os seletores forem inválidos.
o método querySelector() retorna apenas o primeiro elemento dos seletores.
para retornar todas as correspondências, use o método querySelectorAll().
*/
var titulo = document.querySelector(".titulo"); //seleciona titulo
console.log(titulo); //imprime tag <h1> do titulo alterado
console.log(titulo.textContent); //imprime string do titulo original 'Aparecida Nutrição'

/*
HTML DOM textContent Property.
valor de retorno: uma string, representando o texto do nó e todos os seus descendentes.
retorna null se o elemento for um documento, um tipo de documento ou uma notação.
innerText retorna apenas o texto, sem espaçamento e tags de elemento interno.
innerHTML retorna o texto, incluindo todas as tags de espaçamento e elementos internos.
textContent retorna o texto com espaçamento, mas sem tags de elemento interno.
*/
titulo.textContent = "Aparecida Nutricionista"; //altera string do titulo
console.log(titulo.textContent); //imprime string do titulo alterado 'Aparecida Nutricionista'

var paciente = document.querySelector('#primeiro-paciente'); //seleciona linha do primeiro paciente
console.log(paciente); //imprime tag <tr> e tags filhos <td>

var tdPeso = paciente.querySelector('.info-peso'); //seleciona coluna do peso
var peso = tdPeso.textContent; //define peso com string coletada da coluna
console.log(tdPeso); //imprime tag <td> do peso
console.log(peso); //imprime string do peso '100'

var tdAltura = paciente.querySelector('.info-altura'); //seleciona coluna da altura
var altura = tdAltura.textContent; //define altura com string coletada da coluna
console.log(tdAltura); //imprime tag <td> da altura
console.log(altura); //imprime string da altura '2.00'

var tdImc = paciente.querySelector('.info-imc'); //seleciona coluna do IMC

var pesoValido = true; //por default, define peso como válido
var alturaValida = true; //por default, define altura como válida

/*
JS Conditions: if...else...else if.
if executa bloco de código, se condição apontada for verdadeira.
else executa bloco de código, se a mesma condição for falsa.
else if testa a nova condição, se a primeira condição for falsa.
switch executa muitos blocos alternativos de código.
*/
if (peso <= 0 || peso >= 1000) { //verifica se peso é menor que zero ou maior que mil
    pesoValido = false; //define peso como inválido
    tdImc.textContent = "peso inválido"; //altera string do peso
    console.log("peso inválido"); //imprime aviso se peso for menor que zero ou maior que mil
}

if (altura <= 0 || altura >= 3) { //verifica se altura é menor que zero ou maior que três
    alturaValida = false; //define altura como inválida
    tdImc.textContent = "altura inválida"; //altera string da altura
    console.log("altura inválida"); //imprime aviso se altura for menor que zero ou maior que três
}

if (alturaValida && pesoValido) { //verifica se altura e peso são válidos para calcular IMC
    var imc = peso / (altura * altura); //calcula IMC: 100 / (2.00 * 2.00) == 25
    tdImc.textContent = imc; //atualiza IMC calculado
    console.log(imc); //imprime imc
} else { //caso contrário da validação de peso e altura
    tdImc.textContent = "Altura e/ou peso inválidos"; //altera string do IMC
}
