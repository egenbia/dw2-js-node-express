//MANIPULAÇÃO DE DATAS

document.write("<h3>Manipulando datas:</h3>");
// criar um instância da classe Date() do Javascript

const dataAtual = new Date();
document.write(dataAtual);

//pegando o dia atual
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia: ${dia} </p>`);

//pegando o mês atual
const mês = dataAtual.getMonth() + 1;
document.write(`<p>Estamos no mês: ${mês} </p>`);

//pegando o ano atual
const ano = dataAtual.getFullYear();
document.write(`<p>Estamos no ano: ${ano} </p>`);

//pegando o dia da semana
const diaSemana = dataAtual.getDay();
document.write(`<p>Estamos no dia da semana: ${diaSemana} </p>`);

//adicionando Dias, Mêses e Anos à data atual
// adicionando 4 anos ao ano atual
dataAtual.setFullYear(dataAtual.getFullYear() + 4);
document.write(`Daqui a 4 anos será: ${dataAtual.getFullYear()}`);

//adicionando mêses
dataAtual.setMonth(dataAtual.getMonth() + 3);

//adicionando dias
dataAtual.setDate(dataAtual.getDate() + 10);

document.write("<h3>Formatação de moedas:</h3>");

//FORMATAÇÃO DE MOEDAS
//REAL
const salario = 1512;
const salarioReal = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
document.write(`<p>O valor do salário mínimo atual é ${salarioReal}.</p>`)

//DÒLAR
const salarioDolar = salario.toLocaleString("pt-br", {
  style: "currency",
  currency: "USD",
});

document.write(`<p>Salário em dólar: ${salarioDolar}.</p>`)
const salarioConvertido = salario * 0.176
document.write(`O valor do salário mínimo atual é ${salarioConvertido.toLocaleString("en", {
    style: "currency",
  currency: "USD",
})}.`)

//currency: EUR -> euro

//FORMATAÇÃO DE STRINGS (textos)
document.write("<h3>Formatação de String:</h3>")
const nome = "Bia Egen"

//ALTERANDO PARA LETRAS MAIÚSCULAS - toUpperCase
document.write(`Nome em maiúsculas: ${nome.toUpperCase()}`)
//ALTERANDO PARA LETRAS MINÚSCULAS - toLowerCase
document.write(`<p>Nome em maiúsculas: ${nome.toLowerCase()}</p>`)

//REMOVENDO ESPAÇOS DA STRING
const novoNome = nome.replace(/\s/g, "")

//CNTANDO CARACTERES DE UMA STRING - .length
document.write(`Esse nome tem: ${novoNome.length} letras.`)