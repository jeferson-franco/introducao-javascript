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
    var paciente = obtemPacienteDoFormulario(form); //declara variável que recebe objeto da função
    console.log(paciente); //imprime variável do objeto obtido pela função

    var pacienteTr = montaTr(paciente); //invoca função para criar tag <tr>

    var tabela = document.querySelector("#tabela-pacientes"); //seleciona tabela <tbody>
    tabela.appendChild(pacienteTr); //adiciona tag <tr> dentro da tabela <tbody>

    /*
    HTML DOM Form reset() Method.
    [sintaxe] formObject.reset()
    redefine valor de todos os elementos do formulário.
    submit() //envia formulário.
    */
    form.reset();
});

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
function obtemPacienteDoFormulario(form) { //pega valores do <form> e extrai para bloco-objeto

    var paciente = { //variável-objeto do novo paciente

        /*
        HTML DOM Input Text value Property.
        [sintaxe]
        textObject.value //retorna valor do objeto.
        textObject.value = text //define valor do objeto.
        define ou retorna texto do valor atribuído ao objeto.
        */
        nome: form.nome.value, //propriedade nome do objeto
        peso: form.peso.value, //propriedade peso do objeto
        altura: form.altura.value, //propriedade altura do objeto
        gordura: form.gordura.value, //propriedade gordura do objeto
        imc: calculaImc(form.peso.value, form.altura.value) //realiza cálculo do imc no objeto
    }
    return paciente; //retorna objeto paciente com propriedades montadas
}

function montaTr(paciente) { //pega valores da variável paciente e extrai para bloco-objeto

    /*
    HTML DOM Document createElement().
    [sintaxe] document.createElement(type)
    cria novo elemento.
    */
    var pacienteTr = document.createElement("tr"); //cria tag <tr> para objeto

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
    pacienteTr.classList.add("paciente"); //adiciona class na tag <tr> do objeto

    /*
    HTML DOM appendChild() Method.
    [sintaxe] node.appendChild(node)
    anexa elemento como o último filho de um elemento pai.
    pode também mover elemento filho de um elemento pai para outro.
    insertBefore() insere elemento filho antes de outro elemento filho existente.
    */
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); //monta <td> dentro de <tr>
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso")); //monta <td> dentro de <tr>
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura")); //monta <td> dentro de <tr>
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura")); //monta <td> dentro de <tr>
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc")); //monta <td> dentro de <tr>

    return pacienteTr; //retorna objeto com propriedades preenchidas
}

function montaTd(dado, classe) { //executa bloco para montar tag <td>

    var td = document.createElement("td"); //cria tag <td>
    td.textContent = dado; //insere texto na tag <td>
    td.classList.add(classe); //adiciona classe na tag <td>

    return td; //retorna tag <td> montada com texto e classe
}
