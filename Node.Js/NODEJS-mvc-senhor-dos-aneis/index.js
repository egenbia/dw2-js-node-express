import express from "express";
import PersonagensController from "./controller/PersonagensController.js";
import LutasController from "./controller/LutasController.js";
import LocaisController from "./controller/LocaisController.js";

const app = express();

// Configuração do EJS
app.set("view engine", "ejs");

// Pasta para arquivos estáticos
app.use(express.static("public"));

// Uso dos controllers
app.use("/", PersonagensController);
app.use("/", LutasController);
app.use("/", LocaisController);

// Rota principal
app.get("/", (req, res) => {
  res.render("index");
});

// Servidor
const port = 8080;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
