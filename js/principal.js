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
console.log(titulo.textContent); //imprime texto do titulo original 'Aparecida Nutrição'

/*
HTML DOM textContent Property.
[sintaxe]
- node.textContent //retorna conteúdo de texto do elemento.
- node.textContent = text //define conteúdo de texto do elemento.
retorna texto do elemento e de todos os descendentes.
se o elemento for documento, tipo de documento ou notação, retorna null.
.innerText retorna apenas o texto, sem espaçamento e tags de elemento interno.
.innerHTML retorna o texto, incluindo todas as tags de espaçamento e elementos internos.
.textContent retorna o texto com espaçamento, mas sem tags de elemento interno.
*/
titulo.textContent = "Aparecida Nutricionista"; //altera texto do titulo
console.log(titulo.textContent); //imprime texto do titulo alterado 'Aparecida Nutricionista'

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
    var peso = tdPeso.textContent; //define peso com texto coletado da coluna
    console.log(tdPeso); //imprime tag <td> do peso
    console.log(peso); //imprime texto do peso '100'
    
    var tdAltura = paciente.querySelector('.info-altura'); //seleciona coluna da altura
    var altura = tdAltura.textContent; //define altura com texto coletado da coluna
    console.log(tdAltura); //imprime tag <td> da altura
    console.log(altura); //imprime texto da altura '2.00'
    
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
        tdImc.textContent = "peso inválido"; //altera texto do peso
        
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
        tdImc.textContent = "altura inválida"; //altera texto da altura

        paciente.classList.add("paciente-invalido"); //adiciona classe cor-de-fundo ao paciente
        console.log("altura inválida"); //imprime aviso se altura for menor que zero ou maior que três
    }

    if (alturaValida && pesoValido) { //verifica se altura e peso são válidos para calcular IMC
        var imc = peso / (altura * altura); //calcula IMC: 100 / (2.00 * 2.00) == 25
        
        /*
        JS Number toFixed().
        [sintaxe] number.toFixed(x)
        converte número em texto.
        arredonda texto para determinado número de decimais.
        se número de decimais for maior que o número, zeros serão adicionados.
        */
        tdImc.textContent = imc.toFixed(2); //atualiza IMC calculado e arredonda duas casas decimais
        console.log(imc); //imprime imc
    } else { //caso contrário da validação de peso e altura
        tdImc.textContent = "Altura e/ou peso inválidos"; //altera texto do IMC
    }

}

var botaoAdicionar = document.querySelector("#adicionar-paciente"); //seleciona botão Adicionar
console.log(botaoAdicionar); //imprime tag <button>

/*
HTML DOM addEventListener() Method.
[sintaxe] element.addEventListener(event, function, useCapture)
document.addEventListener() //anexa manipulador de eventos ao elemento.
removeEventListener() //remove manipulador de eventos que foi anexado.
event [obrigatório] texto que define nome do evento (use "click" ao invés de "onclick").
function [obrigatório] define função para executar quando evento ocorrer.
- quando evento ocorrer, objeto do evento é passado para função como primeiro parâmetro.
- tipo do objeto depende do evento definido (ex: evento "click" pertence ao objeto MouseEvent).
useCapture [opcional] se verdadeiro, manipulador do evento executa na fase de captura.
- se falso [padrão], manipulador do evento executa na fase de borbulhamento.
*/
botaoAdicionar.addEventListener("click", function(event) { //escuta "click" do botão

    /*
    preventDefault() Event Method.
    [sintaxe] event.preventDefault()
    cancela evento se for cancelável, ação padrão que pertence ao evento não ocorrerá.
    - clicar em botão "enviar" impede que envie formulário.
    - clicar em link impede que link siga URL.
    nem todos os eventos são canceláveis.
    stopPropagation() para impedir propagação de evento através do DOM.
    */
    event.preventDefault(); //previne botão recarregar página
    console.log("cliquei no botão"); //imprime aviso de click no botão

    var form = document.querySelector("#form-adiciona"); //seleciona formulário <form>

    /*
    HTML DOM Input Text value Property.
    [sintaxe]
    textObject.value //retorna valor do objeto.
    textObject.value = text //define valor do objeto.
    define ou retorna texto do valor atribuído ao objeto.
    */
    var nome = form.nome.value; //atribui na variável o valor do nome obtido no formulário
    var peso = form.peso.value; //atribui na variável o valor do peso obtido no formulário
    var altura = form.altura.value; //atribui na variável o valor da altura obtida no formulário
    var gordura = form.gordura.value; //atribui na variável o valor da gordura obtida no formulário

    /*
    HTML DOM Document createElement().
    [sintaxe] document.createElement(type)
    cria novo elemento.
    */
    var pacienteTr = document.createElement("tr"); //cria tag <tr> para novo paciente
    var nomeTd = document.createElement("td"); //cria tag <td> para nome do novo paciente
    var pesoTd = document.createElement("td"); //cria tag <td> para peso do novo paciente
    var alturaTd = document.createElement("td"); //cria tag <td> para altura do novo paciente
    var gorduraTd = document.createElement("td"); //cria tag <td> para gordura do novo paciente
    var imcTd = document.createElement("td"); //cria tag <td> para imc do novo paciente

    nomeTd.textContent = nome; //define texto do formulário na tag <td> nome
    pesoTd.textContent = peso; //define texto do formulário na tag <td> peso
    alturaTd.textContent = altura; //define texto do formulário na tag <td> altura
    gorduraTd.textContent = gordura; //define texto do formulário na tag <td> gordura

    /*
    HTML DOM appendChild() Method.
    [sintaxe] node.appendChild(node)
    anexa elemento como o último filho de um elemento pai.
    pode também mover elemento filho de um elemento pai para outro.
    insertBefore() insere elemento filho antes de outro elemento filho existente.
    */
    pacienteTr.appendChild(nomeTd); //adiciona tag <td> nome dentro da tag <tr> paciente
    pacienteTr.appendChild(pesoTd); //adiciona tag <td> peso dentro da tag <tr> paciente
    pacienteTr.appendChild(alturaTd); //adiciona tag <td> altura dentro da tag <tr> paciente
    pacienteTr.appendChild(gorduraTd); //adiciona tag <td> gordura dentro da tag <tr> paciente

    var tabela = document.querySelector("#tabela-pacientes"); //seleciona tabela <tbody>
    tabela.appendChild(pacienteTr); //adiciona tag <tr> paciente dentro da tabela <tbody>
});