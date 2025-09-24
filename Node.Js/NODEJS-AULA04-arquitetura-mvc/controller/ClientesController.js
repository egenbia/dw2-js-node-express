//Importando o express
import express from "express"
//Carregando na variável router o express.Router() que é responsável por gerenciar as rotas da aplicação
const router = express.Router()

//ROTA DE CLIENTES
//não usamos mais app e sim router
router.get("/clientes", (req, res) => {
  const clientes = [
    {nome: "Ricardo", CPF: "123.456.789-10", endereco: "Rua das Flores, 34"},
    {nome: "Isaac", CPF: "123.456.789-10", endereco: "Rua Diamante, 100"},
    {nome: "Gabriela", CPF: "123.456.789-10", endereco: "Rua Ceará, 30"},
    {nome: "Renan", CPF: "123.456.789-10", endereco: "Rua Curitiba, 98"},
  ];
  res.render("clientes", {
    clientes : clientes,
  });
});

//exportando o objeto router
export default router;