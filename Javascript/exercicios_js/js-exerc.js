//EXERCÍCIO 1
const user = "Beatriz";

function SaudacaoPersonalizada(user) {
  document.write(`<P>Olá, ${user}! Bem-vindo(a) á Calculadora Universal</P>`);
}
SaudacaoPersonalizada(user);

//EXERCÍCIO 2
const operacaoMatematica = (num1, operador, num2) => {
  const resultado = eval(`${num1} ${operador} ${num2}`);
  document.write(`<p>O resultado de ${num1} ${operador} ${num2} é igual a ${resultado}.</p>`);
};
operacaoMatematica(1100, "-", 1);

//EXERCÍCIO 3
const calcularDobro = (x) => {
    return x * 2;
};
const num = 100;
document.write(`<P>O resultado de ${num} * 2 (o dobro) é igual a ${calcularDobro(900)}.</P>`);


// const dobro = (num1, operador, num2) => {
//   const resultado = eval(`${num1} ${operador} ${num2}`);
//   document.write(`<p>O resultado de ${num1} ${operador} ${num2} é igual a ${resultado}.</p>`);
// };
// operacaoMatematica(100, "*", 2);

//EXERCÍCIO 4
const calcularMetade = (num1, operador, num2) => {
  const resultado = eval(`${num1} ${operador} ${num2}`);
  document.write(`<p>O resultado de ${num1} ${operador} ${num2} é igual a ${resultado}.</p>`);
};
operacaoMatematica(100, "/", 2);

//EXERCÍCIO 5
const loadUser = (function (user) {
  document.write(
    `<p><strong>${user}</strong> pronta para uso!</p> `
  );
})("Calculadora Universal");