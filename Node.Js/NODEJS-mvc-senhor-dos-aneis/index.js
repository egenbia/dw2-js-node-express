// Importando o Express com ES6 Modules
import express from "express";
import { Sequelize } from "sequelize";
// Importando o Sequelize (arquivo de conexão)
import connection from "./config/sequelize-config.js";
// Importando o Model
import Local from "./models/local.js";
import Personagem from "./models/personagem.js";
import Luta from "./models/luta.js";
// Iniciando o Express na variável app
const app = express();
// Importando os Controllers (onde estão as rotas)
import PersonagensController from "./controller/PersonagensController.js";
import LutasController from "./controller/LutasController.js";
import LocaisController from "./controller/LocaisController.js";

// Configurações
// Define o uso do body-parser para pegar dados do formulário
app.use(express.urlencoded({ extended: false }));


// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", PersonagensController);
app.use("/", LutasController);
app.use("/", LocaisController);

// Realizando a conexão com o banco de dados
// then() e catch() estão tratando a resolução da promessa
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados realizado com sucesso");
  })
  .catch((error) => {
    console.log(error);
  });

// Criando o banco de dados (se ele ainda não existir)
connection.query("CREATE DATABASE IF NOT EXISTS lotr;").then(() => {
    console.log("O banco de dados está criado.");
  })
  .catch((error) => {
    console.log(error);
  });

// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, function (error) {
  if (error) {
    console.log(`Não foi possível iniciar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port} !`);
  }
});