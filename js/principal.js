/*
HTML DOM querySelector() Method.
[sintaxe] document.querySelector(CSS selectors)
retorna objeto NodeList, com primeiro elemento dos seletores CSS (separado por vírgula).
seletor CSS seleciona elemento HTML através de id, class, type, attribute, value etc.
se nenhuma correspondência for encontrada, retorna null.
lança exceção SYNTAX_ERR se seletor for inválido.
.querySelector() retorna apenas o primeiro elemento dos seletores.
.querySelectorAll() retorna todas as correspondências.
*/
var titulo = document.querySelector(".titulo"); //seleciona titulo
console.log(titulo); //imprime tag <h1> do titulo alterado
console.log(titulo.textContent); //imprime string do titulo original 'Aparecida Nutrição'

/*
HTML DOM textContent Property.
[sintaxe]
- node.textContent //retorna conteúdo de texto do elemento.
- node.textContent = text //define conteúdo de texto do elemento.
retorna string, com texto do elemento e de todos os descendentes.
se o elemento for documento, tipo de documento ou notação, retorna null.
.innerText retorna apenas o texto, sem espaçamento e tags de elemento interno.
.innerHTML retorna o texto, incluindo todas as tags de espaçamento e elementos internos.
.textContent retorna o texto com espaçamento, mas sem tags de elemento interno.
*/
titulo.textContent = "Aparecida Nutricionista"; //altera string do titulo
console.log(titulo.textContent); //imprime string do titulo alterado 'Aparecida Nutricionista'

var pacienteLista = document.querySelectorAll('.paciente'); //seleciona lista de pacientes
console.log(pacienteLista); //imprime tags <tr> e tag-filhos <td>

/*
JS Loop For.
[sintaxe]
for (instrucao1; instrucao2; instrucao3) {
    // bloco de código a ser executado.
}
- instrucao1 é executada (uma vez) antes da execução do bloco de código.
- instrucao2 define a condição para executar o bloco de código.
- instrucao3 é executada (todas as vezes) após a execução do bloco de código.
for percorre um bloco de código várias vezes.
for/in percorre as propriedades de um objeto.
for/of percorre os valores de um objeto iterável.
while percorre um bloco de código enquanto uma condição é verdadeira.
do/while também percorre um bloco de código enquanto uma condição for verdadeira.
*/
for (var i = 0; i < pacienteLista.length; i++) { //loop na lista de pacientes
    console.log(pacienteLista[i]); //imprime cada paciente da lista até o fim do loop
    var paciente = pacienteLista[i]; //define atalho para cada paciente da lista

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
    [sintaxe]
    if (condicao1) {
        // bloco de código a ser executado se condicao1 for verdadeira.
    } else if (condicao2) {
        // bloco de código a ser executado se condicao1 for falsa e condicao2 for verdadeira.
    } else {
        // bloco de código a ser executado se condicao1 for falsa e condicao2 for falsa.
    }
    if executa bloco de código, se condição apontada for verdadeira.
    else executa bloco de código, se a mesma condição for falsa.
    else if testa a nova condição, se a primeira condição for falsa.
    switch executa muitos blocos alternativos de código.
    */
    if (peso <= 0 || peso >= 1000) { //verifica se peso é menor que zero ou maior que mil
        pesoValido = false; //define peso como inválido
        tdImc.textContent = "peso inválido"; //altera string do peso
        
        /*
        HTML DOM classList Property.
        [sintaxe] element.classList
        .add(class1,class2,...) adiciona uma ou mais classes ao elemento.
        .contains(class) se elemento possui a classe, retorna verdadeiro (caso contrário, falso).
        .item(index) retorna a classe com número-índice do elemento (a partir de zero).
        - se índice estiver fora do alcance, retorna null.
        .remove(class1,class2,...) remove uma ou mais classes ao elemento.
        - remover classe que não existe, NÃO retorna erro.
        .toggle(class,true|false) alterna entre classe do elemento.
        - primeiro parâmetro remove classe do elemento, e retorna falso.
        - se classe não existir, é adicionada ao elemento, e retorna verdadeiro.
        - segundo parâmetro força classe ser adicionada ou removida, independente de existir.
        - element.classList.toggle("classToRemove", false); //remove classe.
        - element.classList.toggle("classToAdd", true); //adiciona classe. 
        */
        paciente.classList.add("paciente-invalido"); //adiciona classe cor-de-fundo ao paciente
        console.log("peso inválido"); //imprime aviso se peso for menor que zero ou maior que mil
    }

    if (altura <= 0 || altura >= 3) { //verifica se altura é menor que zero ou maior que três
        alturaValida = false; //define altura como inválida
        tdImc.textContent = "altura inválida"; //altera string da altura

        paciente.classList.add("paciente-invalido"); //adiciona classe cor-de-fundo ao paciente
        console.log("altura inválida"); //imprime aviso se altura for menor que zero ou maior que três
    }

    if (alturaValida && pesoValido) { //verifica se altura e peso são válidos para calcular IMC
        var imc = peso / (altura * altura); //calcula IMC: 100 / (2.00 * 2.00) == 25
        
        /*
        JS Number toFixed().
        [sintaxe] number.toFixed(x)
        converte um número em uma string.
        arredonda a string para um número de decimais.
        se o número de decimais for maior que o número, zeros serão adicionados.
        */
        tdImc.textContent = imc.toFixed(2); //atualiza IMC calculado e arredonda duas casas decimais
        console.log(imc); //imprime imc
    } else { //caso contrário da validação de peso e altura
        tdImc.textContent = "Altura e/ou peso inválidos"; //altera string do IMC
    }

}
