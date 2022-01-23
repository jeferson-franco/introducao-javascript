/*
HTML DOM querySelector() Method.
[sintaxe] document.querySelector(CSS selectors)
retorna objeto NodeList, com primeiro elemento dos seletores CSS (separado por vírgula).
seletor CSS seleciona elemento HTML através de id, class, type, attribute, value etc.
se nenhuma correspondência é encontrada, retorna null.
lança exceção SYNTAX_ERR se seletor é inválido.
.querySelector() //retorna apenas o primeiro elemento dos seletores.
.querySelectorAll() //retorna todas as correspondências.
*/
var pacientes = document.querySelectorAll(".paciente"); //seleciona todas <tr> com classe

/*
JS Array forEach() Method.
[sintaxe] array.forEach(function(currentValue, index, arr), thisValue)
chama função para cada elemento em matriz.
não é executado para elementos vazios.
*/
//pacientes.forEach(function(paciente) { //para cada variável, executa função

    //paciente.addEventListener("dblclick", function() { //ao escutar evento, executa função
    //    this.remove(); //remove variável da função
    //});
//});

//var tabela = document.querySelector("#tabela-pacientes"); //seleciona <tbody>

//tabela.addEventListener("click", function() { //ao escutar evento, executa função
//    console.log("fui clicado"); //imprime texto
//});

var tabela = document.querySelector("#tabela-pacientes"); //seleciona <tbody>

/*
HTML DOM addEventListener() Method.
[sintaxe] element.addEventListener(event, function, useCapture)
document.addEventListener() //anexa manipulador de eventos ao elemento.
removeEventListener() //remove manipulador de eventos que foi anexado.
event //[obrigatório] define evento (use "click" ao invés de "onclick").
function //[obrigatório] define função para executar quando evento ocorrer.
- quando evento ocorrer, objeto do evento é passado para função como primeiro parâmetro.
- tipo do objeto depende do evento definido (ex: evento "click" pertence ao objeto MouseEvent).
useCapture //[opcional:bool] se verdadeiro, manipulador do evento executa na fase de captura.
- se falso [padrão], manipulador do evento executa na fase de borbulhamento.
*/
tabela.addEventListener("dblclick", function(event) { //ao escutar <tbody>, executa função
    //var alvoEvento = event.target; //atribui evento na variável
    //var paiDoAlvo = alvoEvento.parentNode; //atribui pai do evento na variável
    //paiDoAlvo.remove(); //remove pai do evento
    
    event.target.parentNode.classList.add("fadeOut"); //insere classe na <tbody>

    setTimeout (function () { //ao definir tempo de espera, executa função
        if (event.target.tagName == "TD") { //se evento é <td>
            event.target.parentNode.remove(); //remove pai do evento (versão resumida)
        }
        
    }, 500); //tempo de espera (milissegundos)
    
});
