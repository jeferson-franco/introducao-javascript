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
var botaoAdicionar = document.querySelector("#adicionar-paciente"); //seleciona <button>
console.log(botaoAdicionar); //imprime variável

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
botaoAdicionar.addEventListener("click", function(event) { //executa função durante evento escutado

    /*
    preventDefault() Event Method.
    [sintaxe] event.preventDefault()
    cancela evento se for cancelável, ação padrão que pertence ao evento não ocorrerá.
    - clicar em botão "enviar" impede que envie formulário.
    - clicar em link impede que link siga URL.
    nem todos os eventos são canceláveis.
    stopPropagation() para impedir propagação de evento através do DOM.
    */
    event.preventDefault(); //previne evento de atualizar página
    console.log("cliquei no botão"); //imprime texto

    var form = document.querySelector("#form-adiciona"); //seleciona <form>
    var paciente = obtemPacienteDoFormulario(form); //invoca função e atribui na variável
    console.log(paciente); //imprime variável

    if (!validaPaciente(paciente)) { //se função NÃO for válida
        console.log("paciente inválido"); //imprime texto
        return; //retorna vazio
    }

    var pacienteTr = montaTr(paciente); //invoca função e atribui na variável

    var erros = validaPaciente(paciente); //invoca função e atribui na variável
    console.log(erros); //imprime variável
    if (erros.length > 0) { //se tamanho do texto maior que zero
        exibeMensagensDeErro(erros); //invoca função
        return; //retorna vazio
    }

    var tabela = document.querySelector("#tabela-pacientes"); //seleciona <tbody>
    tabela.appendChild(pacienteTr); //insere <tr> dentro de <tbody>

    /*
    HTML DOM Form reset() Method.
    [sintaxe] formObject.reset()
    redefine valor de todos os elementos do formulário.
    submit() //envia formulário.
    */
    form.reset(); //limpa formulário

    var mensagensErro = document.querySelector("#mensagens-erro"); //seleciona <ul>
    
    /*
    HTML DOM innerHTML Property.
    [sintaxe]
    HTMLElementObject.innerHTML //retorna conteúdo HTML.
    HTMLElementObject.innerHTML = text //define conteúdo HTML.
    define ou retorna conteúdo HTML interno de elemento.
    */
    mensagensErro.innerHTML = ""; //insere vazio na HTML da variável
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
function exibeMensagensDeErro(erros) { //executa função
    var ul = document.querySelector("#mensagens-erro"); //seleciona <ul>
    ul.innerHTML = ""; //insere vazio na HTML da variável
    
    /*
    JS Array forEach() Method.
    [sintaxe] array.forEach(function(currentValue, index, arr), thisValue)
    chama função para cada elemento em matriz.
    não é executado para elementos vazios.
    */
    erros.forEach(function(erro) { //para cada variável, executa função
        var li = document.createElement("li"); //cria <li>
        li.textContent = erro; //insere texto na <li>
        ul.appendChild(li); //insere <li> dentro de <ul>
    });
}

function obtemPacienteDoFormulario(form) { //executa função

    var paciente = { //variável

        /*
        HTML DOM Input Text value Property.
        [sintaxe]
        textObject.value //retorna valor do objeto.
        textObject.value = text //define valor do objeto.
        define ou retorna texto do valor atribuído ao objeto.
        */
        nome: form.nome.value, //propriedade atribuída
        peso: form.peso.value, //propriedade atribuída
        altura: form.altura.value, //propriedade atribuída
        gordura: form.gordura.value, //propriedade atribuída
        imc: calculaImc(form.peso.value, form.altura.value) //invoca função na propriedade
    }
    return paciente; //retorna variável com propriedades montadas
}

function montaTr(paciente) { //executa função

    /*
    HTML DOM Document createElement().
    [sintaxe] document.createElement(type)
    cria novo elemento.
    */
    var pacienteTr = document.createElement("tr"); //cria <tr>

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
    pacienteTr.classList.add("paciente"); //insere classe na <tr>

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

    return pacienteTr; //retorna variável com propriedades montadas
}

function montaTd(dado, classe) { //executa função

    var td = document.createElement("td"); //cria <td>
    td.textContent = dado; //insere texto na <td>
    td.classList.add(classe); //adiciona classe na <td>

    return td; //retorna variável com propriedades montadas
}

function validaPaciente(paciente) { //executa função
    var erros = []; //cria array

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
    if (paciente.nome.length == 0) { //se tamanho da variável for igual a zero
        erros.push("nome inválido") //empurra texto para array
    }

    if (paciente.gordura.length == 0) { //se tamanho da variável for igual a zero
        erros.push("gordura inválida"); //empurra texto para array
    }

    if (paciente.peso.length == 0) { //se tamanho da variável for igual a zero
        erros.push("peso inválido"); //empurra texto para array
    }

    if (paciente.altura.length == 0) { //se tamanho da variável for igual a zero
        erros.push("altura inválida"); //empurra texto para array
    }

    if (!validaPeso(paciente.peso)) { //se função NÃO for válida
        erros.push("peso inválido"); //empurra texto para array
    }

    if (!validaAltura(paciente.altura)) { //se função NÃO for válida
        erros.push("altura inválida"); //empurra texto para array
    }
    return erros; //retorna variável com propriedades montadas
}