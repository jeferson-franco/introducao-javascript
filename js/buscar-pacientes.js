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
var botaoAdicionar = document.querySelector("#buscar-pacientes"); //seleciona <button>

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
botaoAdicionar.addEventListener("click", function() { //ao escutar <button>, executa função
    console.log("buscando pacientes"); //imprime texto

    /*
    XML DOM HttpRequest Object.
    [sintaxe] var xhttp = new XMLHttpRequest()
    open(method, url, async) //define tipo de requisição.
    - method //GET ou POST.
    - url //localização do arquivo.
    - async //[bool] verdadeiro (assíncrono) ou falso (síncrono).
    send() //envia requisição GET ao servidor.
    send(string) //envia requisição POST ao servidor.
    onreadystatechange //quando propriedades do readyState são alteradas, chama função.
    readyState //status da requisição.
    - 0: requisição não iniciada. 
    - 1: conexão estabelecida com servidor.
    - 2: requisição recebida.
    - 3: requisição processando.
    - 4: requisiçao finalizada e retorno pronto.
    status //200: OK, 404: página não encontrada.
    responseText //dados do retorno como texto.
    responseXML //dados do retorno como XML.
    solicita dados de um servidor web.
    atualiza página web sem recarregar página.
    solicita dados de servidor após carregamento da página.
    recebe dados de servidor após carregamento da página.
    envia dados para servidor em segundo plano.
    */
    var xhr = new XMLHttpRequest(); //insere requisição de API na variável
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //abre endereço da API
    xhr.addEventListener("load", function() { //ao escutar requisição, executa função

        var erroAjax = document.querySelector("#erro-ajax"); //seleciona <span>

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
        if (xhr.status == 200) { //se status da requisição é 200
            erroAjax.classList.add("invisivel"); //insere classe na <span>
            var resposta = xhr.responseText; //insere retorno da requisição na variável
            console.log(typeof resposta); //imprime tipo do retorno da requisição
            
            /*
            JSON.parse() Method.
            [sintaxe] const obj = JSON.parse()
            troca dados de/para servidor web.
            ao receber de servidor web, dados são sempre string.
            JSON.parse() //dados se tornam objeto.
            texto deve estar em formato JSON, do contrário recebe erro de sintaxe.
            objeto de data não é permitido em JSON, se precisar escreva-a como string.
            função não é permitido em JSON, se precisar escreva-a como string.
            */
            var pacientes = JSON.parse(resposta); //transforma texto da requisição em variável
            console.log(pacientes); //imprime variável
            console.log(typeof pacientes); //imprime tipo da variável
            
            /*
            JS Array forEach() Method.
            [sintaxe] array.forEach(function(currentValue, index, arr), thisValue)
            chama função para cada elemento em matriz.
            não é executado para elementos vazios.
            */
            pacientes.forEach(function(paciente) { //para cada variável, executa função
                adicionaPacienteNaTabela(paciente); //invoca função
            });

        } else { //se status da requisição NÃO é 200
            console.log(xhr.status); //imprime status da requisição
            console.log(xhr.responseText); //imprime retorno da requisição
            erroAjax.classList.remove("invisivel"); //remove classe da <span>
        }

    });

    xhr.send(); //envia requisição para API
});
