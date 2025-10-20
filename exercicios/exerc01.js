//EXIBIR MENSAGEM COM PARÂMETRO
const user = "bia";

function saudacaoPersonalizada(user) {
  document.write(`<p>Olá, ${user}! Bem-vindo à Calculadora Universal.</p>`);
}
saudacaoPersonalizada(user);

//OPERAÇÃO MATEMÁTICA COM 2 PARÂMETROS
const n1 = 2;
const n2 = 2;
const operador = "+";

function soma() {
  let resultado = n1 + n2; //let → para valores que podem mudar
  document.write(`${n1} ${operador} ${n2} = ${resultado}`);
}
soma(n1, n2);

//FUNÇÃO ANÔNIMA - DOUBLE
const calcularDobro = (x) => {
  return x * 2;
};
document.write(`<p>dobro = ${calcularDobro(5)}</p>`);

//ARROW FUNCTION/ANÔNIMA - Divisão
const calcularMetade = (x) => {
  return x / 2;
};
document.write(`metade = ${calcularMetade(5)}`);

//IIFE
const loadUser = (function (calc) {
  document.write(`<p>${calc} pronta para uso!</p>`);
})("Calculadora Universal");
