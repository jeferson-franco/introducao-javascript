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
var campoFiltro = document.querySelector("#filtrar-tabela"); //seleciona <input>
console.log(campoFiltro); //imprime variável

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
campoFiltro.addEventListener("input", function() { //ao escutar evento, executa função

    /*
    JS this Keyword.
    [sintaxe] this
    refere-se ao objeto ao qual ela pertence.
    em um método, refere-se ao objeto proprietário.
    sozinho, refere-se ao objeto global.
    em uma função, refere-se ao objeto global (no modo estrito, é undefined).
    em um evento, refere-se ao elemento que recebeu o evento.
    em métodos como call() e apply(), pode se referir a qualquer objeto.
    */
    console.log(this.value); //imprime variável da função
    var pacientes = document.querySelectorAll(".paciente"); //seleciona todas <tr> com classe

    /*
    JS Conditions: if...else...else if.
    [sintaxe]
    if (condition1) {
        //executa bloco de código se condition1 é verdadeira.
    } else if (condition2) {
        //executa bloco de código se condition1 é falsa e condition2 é verdadeira.
    } else {
        //executa bloco de código se condition1 é falsa e condition2 é falsa.
    }
    if //executa bloco de código, se condition apontada é verdadeira.
    else //executa bloco de código, se a mesma condition é falsa.
    else if //testa nova condition, se a primeira é falsa.
    switch //executa muitos blocos alternativos de código.
    */
    if (this.value.length > 0) { //se tamanho da variável é maior que zero
        console.log("tem algo digitado"); //imprime texto

        /*
        JS Loop For.
        [sintaxe]
        for (instruction1; instruction2; instruction3) {
            //bloco de código a ser executado.
        }
        instruction1 //executa (uma vez) antes da execução do bloco de código.
        instruction2 //define a condição para executar o bloco de código.
        instruction3 //executa (todas as vezes) após a execução do bloco de código.
        for //percorre bloco de código várias vezes.
        for/in //percorre propriedades de objeto.
        for/of //percorre valores de objeto iterável.
        while...do/while //percorre bloco de código enquanto condição é verdadeira.
        */
        for (var i = 0; i < pacientes.length; i++) { //loop na variável
            var paciente = pacientes[i]; //atribui cada array na variável
            var tdNome = paciente.querySelector(".info-nome"); //seleciona <td>
            var nome = tdNome.textContent; //insere texto na variável

            var expressao = new RegExp(this.value, "i"); //cria expressão regular na variável
            if (!expressao.test(nome)) { //se variável NÃO é válida

                /*
                HTML DOM classList Property.
                [sintaxe] element.classList
                add(class1,class2,...) //insere uma ou mais classes ao elemento.
                contains(class) //[bool] se verdadeiro, elemento possui a classe.
                item(index) //com número-índice (a partir de zero), retorna classe.
                - se número-índice estiver fora do alcance, retorna null.
                remove(class1,class2,...) //remove uma ou mais classes do elemento.
                - remover classe que não existe, NÃO retorna erro.
                toggle(class,true|false) //alterna entre classes do elemento.
                - primeiro parâmetro remove classe do elemento, e retorna falso.
                - se classe não existir, é inserida ao elemento, e retorna verdadeiro.
                - segundo parâmetro força classe ser inserida ou removida, independente de existir.
                element.classList.toggle("classToRemove", false) //remove classe.
                element.classList.toggle("classToAdd", true) //adiciona classe. 
                */
                paciente.classList.add("invisivel"); //insere classe na variável
            } else { //se variável é válida
                paciente.classList.remove("invisivel"); //remove classe da variável
            }

        }

    } else { //se tamanho da variável NÃO é maior que zero
        for (var i = 0; i < pacientes.length; i++) { //loop na variável
            var paciente = pacientes[i]; //atribui cada array na variável
            paciente.classList.remove("invisivel"); //remove classe da variável
        }

    }
    
});
