//EXERCÍCIO 1
const user = "Beatriz";

function SaudacaoPersonalizada(user) {
  document.write(`Olá, ${user}! Bem-vindo(a) á Calculadora Universal1`);
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
document.write(`O dobro do número é ${calcularDobro(900)}`);