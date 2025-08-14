//ARRAYS (vetores): Servers para aramzenar uma lista , ou seja, diferentes elementos em única variável
const products = ["Computador", "Notebook", "Celular", "Tablet"]; //aspas separam cada elemento
document.write(`<p>${products}</p>`); //mostra todos os elementos
document.write(typeof products); // tipo
document.write("<h3>Exibindo um elemento do array através do índice:</h3>");
document.write(`${products[1]}`);

//forEach
document.write("<h3>Percorrendo um arry através do forEach:</h3>");
products.forEach(function (produto) { //metodos do array (forEach)
  document.write(`<p>${produto}</p>`);
}); //função com parâmetros e anônima

//MESMA FUNÇÃO MAS AGORA UMA ARROW FUNCTION
// products.forEach(produto => {//metodos do array (forEach)
//     document.write(`<p>${produto}</p>`)
// })

document.write("<h3>Mostrando os índices de valores com forEach:</h3>");
products.forEach((produto, i) => {
  document.write(`<p>${i + 1} - ${produto}</p>`);
});
