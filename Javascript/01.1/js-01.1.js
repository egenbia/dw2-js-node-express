//VARIÁVEIS PODEM SER DECLARADAS DE 3 FORMAS
//VAR LET E CONST
//var: evite seu uso, pode não ser muito seguro (pode fazer confusão ao declarar duas variáveis com o mesmo nome)
//let: utilize quando for necessário reatribuir o valor da variável, permite fazer reatribuições
//declaração - declara a variável (a variável e seu nome (var = nome))
//atribuição - atribui valor (nome = pedro)
//const: não consigo reatribuir/redeclarado valor (mais seguro, uma constante, não muda) (nã permite apenas declarar)
//shift + alt + f = ponto e virgula

// var nome = "diego"
// var nome = "maria"
// let cidade = "registro"
// let cidade = "pariquera" //não pode
// let endereco
// endereco = "rua"
// conts idade // não pode
// const idade = "12"
// idade = 20 // não pode

//tTIPOS DE FUNÇÕES

//função simples

const message = "<h1>ola bem vindo</h1>";

function showMessage() {
  document.write(message);
}

//invocando a função
showMessage();

//função com parâmetros
const user = "bia";

function userMessage(user) {
  // o nome do parâmetro (user) não precisa ser igual ao nome da variável
  //essa função recebe um parâmetro
  document.write(`<h3>oq deseja fazer hoje, ${user} ?</h3>`);
  //${} template strings / literal strings
  // é usado para inserir variáveis dentro de strings (aspas)
}

userMessage(user); //argumento

//FUNÇÃO COM MAIS DE UM PARÂMETRO
const n1 = 10;
const n2 = 10;
 
function mult() {
  let result = n1 * n2;
  document.write(`A multiplicação de ${n1} e ${n2} é igual a ${result}`);
}
mult(n1, n2);
 
//FUNÇÃO COM RETORNO
const num1 = 1000;
const num2 = 5;
 
function div(num1, num2) {
  return num1 / num2;
}
document.write(
  `<p>A divisão de ${num1} e por ${num2} é igual a ${div(num1, num2)}</p>`
);
 
//FUNÇÃO COM DIFERENTES RETORNOS
const number = 4;
 
function parImpar(number) {
  if (number % 2 == 0) {
    return `par`;
  } else {
    return `impar`;
  }
}
document.write(
  `<p>O número ${number} é <strong>${parImpar(number)}</strong></p>`
);