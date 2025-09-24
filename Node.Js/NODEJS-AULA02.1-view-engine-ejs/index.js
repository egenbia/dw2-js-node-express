// Importando express (framework)
const express = require("express");
//Iniciando o Express na variável "app"
const app = express();

//CONFIGURANDO O EJS
app.set('view engine', 'ejs')

//Criando a primeira rota do site (ROTA PRINCIPAL)
//REQ = trata a requisição
//RES = trata a resposta
app.get("/", (req, res) => {
  res.render("index")
});

app.get("/produtos", (req, res) => {
  // const produtos = ["Computador", "Celular", "Tablet", "Notebook"];

  //Array de objetos com os produtos
  const produtos =[
    {nome: "Celular", preco: 3000},
    {nome: "Computador", preco: 4000},
    {nome: "Tablet", preco: 2000},
    {nome: "Notebook", preco: 3000},
  ];

  res.render("produtos",{
    produtos : produtos
  })
});

app.get("/clientes", (req, res) => {
  const clientes = [
    {nome: "Ricardo", cpf: "123.123.123-90", endereco: "Rua das Flores, n°44"},
    {nome: "Gabriela", cpf: "345.678.321-70", endereco: "Rua Pinto, 54"},
    {nome: "Isaac", cpf: "765.834.951-47", endereco: "Rua Silvana Almeida, 67"},
    {nome: "Igor", cpf: "123.087.654-20", endereco: "Rua Bolsonaro, 69"},
  ]
  res.render("clientes",{
    clientes : clientes
  });
});

app.get("/pedidos", (req, res) => {
  const pedidos = [
    {numero: "1234567", produto: "Caneta", valor: 20},
    {numero: "234567", produto: "Borracha", valor: 2},
    {numero: "32456", produto: "Caderno", valor: 50},
    {numero: "345678", produto: "Post-it", valor: 5},
  ]
  res.render("pedidos",{
    pedidos : pedidos
  });
});

app.get("/perfil", (req, res) => {
  const user = "Bia"
  res.render("perfil", {
    user : user
  })
});

// //ROTA DE PRODUTOS
// app.get("/produtos", (req, res) => {
//     res.send("<h1>Bem-vindo a página de Produtos!</h1>")
// })

// //ROTA DE CLIENTES
// app.get("/clientes", (req, res) => {
//     res.send("<h1>Bem-vindo a página de Clientes!</h1>")
// })

//Iniciando o Servidor HTTP
const port = 8080; // O servidor escutará na porta 8080

app.listen(port, (error) => {
  if (error) {
    console.log9(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
