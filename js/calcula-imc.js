/*
HTML DOM querySelector() Method.
[sintaxe] document.querySelector(CSS selectors)
retorna objeto NodeList, com primeiro elemento dos seletores CSS (separado por vírgula).
seletor CSS seleciona elemento HTML através de id, class, type, attribute, value etc.
se nenhuma correspondência for encontrada, retorna null.
lança exceção SYNTAX_ERR se seletor for inválido.
.querySelector() //retorna apenas o primeiro elemento dos seletores.
.querySelectorAll() //retorna todas as correspondências.
*/
var titulo = document.querySelector(".titulo"); //seleciona <h1>
console.log(titulo); //imprime variável
console.log(titulo.textContent); //imprime texto original da variável

/*
HTML DOM textContent Property.
[sintaxe]
- node.textContent //retorna conteúdo de texto do elemento.
- node.textContent = text //define conteúdo de texto do elemento.
retorna texto do elemento e de todos os descendentes.
se o elemento for documento, tipo de documento ou notação, retorna null.
.innerText //retorna apenas o texto, sem espaçamento e tags de elemento interno.
.innerHTML //retorna o texto, incluindo todas as tags de espaçamento e elementos internos.
.textContent //retorna o texto com espaçamento, mas sem tags de elemento interno.
*/
titulo.textContent = "Aparecida Nutricionista"; //altera texto da variável
console.log(titulo.textContent); //imprime texto alterado da variável

var pacienteLista = document.querySelectorAll('.paciente'); //seleciona <tr>
console.log(pacienteLista); //imprime variável

/*
JS Loop For.
[sintaxe]
for (instruction1; instruction2; instruction3) {
    // bloco de código a ser executado.
}
- instruction1 é executada (uma vez) antes da execução do bloco de código.
- instruction2 define a condição para executar o bloco de código.
- instruction3 é executada (todas as vezes) após a execução do bloco de código.
for //percorre um bloco de código várias vezes.
for/in //percorre as propriedades de um objeto.
for/of //percorre os valores de um objeto iterável.
while //percorre um bloco de código enquanto uma condição é verdadeira.
do/while //também percorre um bloco de código enquanto uma condição for verdadeira.
*/
for (var i = 0; i < pacienteLista.length; i++) { //loop na variável
    console.log(pacienteLista[i]); //imprime cada variável até o fim do loop
    var paciente = pacienteLista[i]; //atribui cada array na variável

    var tdPeso = paciente.querySelector('.info-peso'); //seleciona <td>
    var peso = tdPeso.textContent; //define texto na variável
    console.log(tdPeso); //imprime variável
    console.log(peso); //imprime variável
    
    var tdAltura = paciente.querySelector('.info-altura'); //seleciona <td>
    var altura = tdAltura.textContent; //define texto na variável
    console.log(tdAltura); //imprime variável
    console.log(altura); //imprime variável
    
    var tdImc = paciente.querySelector('.info-imc'); //seleciona <td>
    var pesoValido = validaPeso(peso); //invoca função e atribui na variável
    var alturaValida = validaAltura(altura); //invoca função e atribui na variável

    /*
    JS Conditions: if...else...else if.
    [sintaxe]
    if (condition1) {
        // bloco de código a ser executado se condition1 for verdadeira.
    } else if (condition2) {
        // bloco de código a ser executado se condition1 for falsa e condition2 for verdadeira.
    } else {
        // bloco de código a ser executado se condition1 for falsa e condition2 for falsa.
    }
    if //executa bloco de código, se condition apontada for verdadeira.
    else //executa bloco de código, se a mesma condition for falsa.
    else if //testa a nova condition, se a primeira for falsa.
    switch //executa muitos blocos alternativos de código.
    */
    if (!pesoValido) { //se variável NÃO for válida
        pesoValido = false; //define variável como inválida
        tdImc.textContent = "peso inválido"; //altera texto da variável
        
        /*
        HTML DOM classList Property.
        [sintaxe] element.classList
        .add(class1,class2,...) //adiciona uma ou mais classes ao elemento.
        .contains(class) //se elemento possui a classe, retorna verdadeiro (caso contrário, falso).
        .item(index) //retorna a classe com número-índice do elemento (a partir de zero).
        - se índice estiver fora do alcance, retorna null.
        .remove(class1,class2,...) //remove uma ou mais classes ao elemento.
        - remover classe que não existe, NÃO retorna erro.
        .toggle(class,true|false) //alterna entre classe do elemento.
        - primeiro parâmetro remove classe do elemento, e retorna falso.
        - se classe não existir, é adicionada ao elemento, e retorna verdadeiro.
        - segundo parâmetro força classe ser adicionada ou removida, independente de existir.
        - element.classList.toggle("classToRemove", false) //remove classe.
        - element.classList.toggle("classToAdd", true) //adiciona classe. 
        */
        paciente.classList.add("paciente-invalido"); //insere classe na variável
        console.log("peso inválido"); //imprime texto
    }

    if (!alturaValida) { //se variável NÃO for válida
        alturaValida = false; //define variável como inválida
        tdImc.textContent = "altura inválida"; //altera texto da variável

        paciente.classList.add("paciente-invalido"); //insere classe na variável
        console.log("altura inválida"); //imprime texto
    }

    if (alturaValida && pesoValido) { //se variáveis forem válidas
        var imc = calculaImc(peso, altura); //invoca função e atribui na variável
        
        tdImc.textContent = imc; //define texto na variável
        console.log(imc); //imprime variável
    } else { //se variáveis forem inválidas
        tdImc.textContent = "Altura e/ou peso inválidos"; //altera texto da variável
    }

}

/*
trecho do código movido para form.js
*/

/*
JS Functions.
[sintaxe]
function name(parameter1, parameter2, parameter3) {
    // código a ser executado
}
bloco de código projetado para executar tarefa.
é executado quando "algo" invoca (chama).
nome pode conter letra, digito, underline e cifrão (mesma regra das variáveis).
parâmetro é listado entre parênteses () na definição da função.
argumento da função são valores recebidos pela função quando é invocada.
dentro da função, argumentos(parâmetros) se comportam como variáveis locais.
variáveis locais são criadas quando função inicia e excluídas quando função termina.
quando atinge instrução de return, função para de ser executada.
*/
function calculaImc(peso, altura) { //executa função

    var imc = 0; //define variável
    imc = peso / (altura * altura); //calcula variável
    
    /*
    JS Number toFixed().
    [sintaxe] number.toFixed(x)
    converte número em texto.
    arredonda texto para determinado número de decimais.
    se número de decimais for maior que o número, zeros serão adicionados.
    */
    return imc.toFixed(2); //retorna variável com valor arredondado
}

function validaPeso(peso) { //executa função
    if (peso >= 0 && peso <= 1000) { //se variáveis forem válidas
        return true; //retorna variável válida
    } else { //se variáveis forem inválidas
        return false; //retorna variável inválida
    }
}

function validaAltura(altura) { //executa função
    if (altura >= 0 && altura <= 3.0) { //se variáveis forem válidas
        return true; //retorna variável válida
    } else { //se variáveis forem inválidas
        return false; //retorna variável inválida
    }
}
