//Importando o Express (framework)
// const express = require("express"); -> CommonJS Modelues
import express from "express"
//Iniciando o Express na variável "app"
const app = express();

//importando ops Controllers (onde estão as rotas e onde é tratado as requisições)
import ClientesController from "./controller/ClientesController.js";
import PedidosController from "./controller/PedidosController.js";
import ProdutosController from "./controller/ProdutosController.js";

//CONFIGURANDO O EJS
app.set("view engine", "ejs");

//Definindo a pasta PUBLIC para Arquivos estáricos
app.use(express.static("public"));

//definindo o uso das rotas que estao nos controllers
app.use("/", ClientesController)
app.use("/", PedidosController)
app.use("/", ProdutosController)

//Criando a primeira rota do site (ROTA PRINCIPAL)
//REQ -> trata a REQUISIÇÃO / RES -> trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index");
});





//ROTA PERFIL
//:user -> parâmetro da rota (OBRIGÁTORIO)
//:user -> é um parâmetro da rota (OPCIONAL)
//NAO RODOU
app.get("/perfil/:user", (req, res) => { //REQ = requisição; RES = resposta
    const user = req.params.user

  res.render("perfil", {
    //Enviando variáveis para a página EJS (html)
    user : user
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
