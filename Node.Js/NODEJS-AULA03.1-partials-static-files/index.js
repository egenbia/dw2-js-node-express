//Importando o Express (framework)
const express = require("express");

//Iniciando o Express na variável "app"
const app = express();

//CONFIGURANDO O EJS
app.set("view engine", "ejs");

//Definindo a pasta PUBLIC para Arquivos estáricos
app.use(express.static("public"));

//Criando a primeira rota do site (ROTA PRINCIPAL)
//REQ -> trata a REQUISIÇÃO / RES -> trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Ricardo", CPF: "123.456.789-10", endereco: "Rua das Flores, 34" },
    { nome: "Isaac", CPF: "123.456.789-10", endereco: "Rua Diamante, 100" },
    { nome: "Gabriela", CPF: "123.456.789-10", endereco: "Rua Ceará, 30" },
    { nome: "Renan", CPF: "123.456.789-10", endereco: "Rua Curitiba, 98" },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

app.get("/produtos", (req, res) => {
  // const produtos = ['Computador','Celular','Tablet','Notebook'];

  //Array de objetos com os produtos
  const produtos = [
    { nome: "Celular", preco: 3000 },
    { nome: "Computador", preco: 4000 },
    { nome: "Tablet", preco: 2000 },
    { nome: "Notebook", preco: 3000 },
  ];

  res.render("produtos", {
    produtos: produtos,
  });
});

//ROTA DE PERFIL
//:user -> é um parâmetro da rota (OBRIGATÓRIO)
//:user? -> é um parâmetro da rota (OPCIONAL)
app.get("/perfil/:user", (req, res) => { //req -> requisição / res -> resposta
  const user = req.params.user;
  res.render("perfil", {
    //Enviando variáveis para a página EJS (html)
    user: user,
  });
});

app.get("/pedidos", (req, res) => {
  const pedidos = [
    { numero: "123", produto: "Celular", valor: 3000 },
    { numero: "456", produto: "Computador", valor: 4000 },
    { numero: "789", produto: "Tablet", valor: 2000 },
    { numero: "101", produto: "Notebook", valor: 3000 },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
});

//Iniciando o servidor http
const port = 8080; // O servidor escutará na porta 8080

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
