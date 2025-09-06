document.write("<h3>Mostrando a data:</h3>");
const dataAtual = new Date();
document.write(dataAtual);

document.write(`<h3>Exibindo valor em $</h3>`)
const salario = 500.75;
const compraInternacional = salario.toLocaleString("eng", {
  style: "currency",
  currency: "USD",
});
document.write(`<p>O valor do salário mínimo atual é ${compraInternacional}.</p>`)

document.write(`<h3>${compraInternacional} em moeda brasileira.</h3>`)
const salarioConvertido = salario * 5.421;
document.write(`${compraInternacional} em reais é: ${salarioConvertido.toLocaleString("pt-BR", {
    style: "currency",
  currency: "BRL",
})}.`)

document.write("<h3>Calcular data de entrega do produto</h3>")
dataAtual.setDate(dataAtual.getDate() + 12);
const mês = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();
document.write(`<p>O pacote será entregue em: ${dataAtual.getDate()}/${mês}/${ano}</p>`);

