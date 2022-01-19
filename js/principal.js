/*
HTML DOM querySelector() Method
valor de retorno: o primeiro elemento que corresponde aos seletores CSS especificados.
se nenhuma correspondência for encontrada, null será retornado.
lança uma exceção SYNTAX_ERR se os seletores especificados forem inválidos.
o método querySelector() retorna apenas o primeiro elemento que corresponde aos seletores especificados.
para retornar todas as correspondências, use o método querySelectorAll().
*/
var titulo = document.querySelector(".titulo");
console.log(titulo);
/*
HTML DOM textContent Property.
valor de retorno: uma string, representando o texto do nó e todos os seus descendentes.
retorna null se o elemento for um documento, um tipo de documento ou uma notação.
innerText retorna apenas o texto, sem espaçamento e tags de elemento interno.
innerHTML retorna o texto, incluindo todas as tags de espaçamento e elementos internos.
textContent retorna o texto com espaçamento, mas sem tags de elemento interno.
*/
console.log(titulo.textContent);
titulo.textContent = "Aparecida Nutricionista";