//FUNÇÃO ANÔNIMA
//ela pode ser sem nome, porem precisa ser guardada em uma variável
// function (n1,n2){
//   return n1 + n2;
// };

const soma = function (n1, n2) {
  return n1 + n2;
};

document.write(`<p>O resultado da soma é ${soma(8, 7)}</p>`); //chamei a variável e dei valores a ela
const tipo = typeof soma; // a typeof mostra o tipo de algo
//ex: n1 é um number
//const name = "bia" é uma string
//const tipo = typeof(soma) é uma function
document.write(`${tipo}`);

//ARROW FUNCTION (função anônima)
const dobro = (x) => {
  //arrow - omito a palavra function e coloco essa flecha
  //função x retorna sempre o dobro
  return x * 2;
};
document.write(`<p>O dobro do número é ${dobro(900)}</p>`);

//ARROW FUNCTION com mais de uma parâmetro
const calc = (num1, operador, num2) => {
  return eval(`${num1} ${operador} ${num2}`); // eval recebe dois numeros e um operador e faz o calculo deles
};
document.write(`<p>o resultado da operação é ${calc(1100, "-", 1)}</p>`);
// eval no javascript e uma função nativa que realiza cálculos a partir de dois números e um operador.
// quando a arrow function tem só um parametros nao precisa dos parenteses
//ex:
// const dobro = x (PARÂMETRO) => {
//   return x * 2;
// };

//SIMPLIFICANDO ARROW FUNCTION com um único retorno
//quando se tem apenas um retorno pode apagar as {} e ocultar o return
const calculadora = (num1, operador, num2) =>
  eval(`${num1} ${operador} ${num2}`);
document.write(`<p>o resultado da operação é ${calculadora(1100, "+", 1)}</p>`);

//IIFE - função imediata (immediataly invoked function expression)
const iife = (function () {
  document.write("<p>estou sendo executada imediatamente!</p>");
})();

//IIFE COM PARÂMETRO
const loadUser = (function (user) {
  document.write(
    `<p>carregando as informações do usuário: <strong>${user}</strong>...</p> `
  );
})("Bia");
