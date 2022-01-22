/*
HTML DOM querySelectorAll() Method.
[sintaxe] document.querySelectorAll(CSS selectors)
retorna todos os elementos dos seletores CSS, como objeto NodeList estático.
alterações no DOM NÂO causam efeito no objeto NodeList.
objeto NodeList pode ser acessado por números de índice, que começa em zero.
length //determina número de elementos que corresponde ao seletor.
lança exceção SYNTAX_ERR se seletores forem inválidos.
*/
var pacientes = document.querySelectorAll(".paciente"); //seleciona <tr>

/*
JS Array forEach() Method.
[sintaxe] array.forEach(function(currentValue, index, arr), thisValue)
chama função para cada elemento em matriz.
não é executado para elementos vazios.
*/
//pacientes.forEach(function(paciente) { //para cada variável, executa função

    //paciente.addEventListener("dblclick", function() { //durante evento escutado, executa função
    //    this.remove(); //remove variável
    //});
//});

//var tabela = document.querySelector("#tabela-pacientes"); //seleciona <tbody>

//tabela.addEventListener("click", function() { //durante evento escutado, executa função
//    console.log("fui clicado"); //imprime texto
//});

var tabela = document.querySelector("#tabela-pacientes"); //seleciona <tbody>

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
tabela.addEventListener("dblclick", function(event) { //durante evento escutado, executa função
    //var alvoEvento = event.target; //atribui evento na variável
    //var paiDoAlvo = alvoEvento.parentNode; //atribui pai do evento na variável
    //paiDoAlvo.remove(); //remove pai do evento
    
    event.target.parentNode.classList.add("fadeOut"); //adiciona classe ao evento

    setTimeout (function () { //ao definir tempo de espera, executa função
        if (event.target.tagName == "TD") { //se evento for <td>
            event.target.parentNode.remove(); //remove pai do evento (versão resumida)
        }
        
    }, 500); //tempo de espera (milissegundos)
    
});
