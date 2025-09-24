//Importando o express
import express from "express"
//Carregando na variável router o express.Router() que é responsável por gerenciar as rotas da aplicação
const router = express.Router()

//ROTA DE PEDIDOS
//não usamos mais app e sim router
router.get("/pedidos", (req, res) => { 
    const pedidos = [
    {numero: "123", produto: "Celular", valor: 3000},
    {numero: "456", produto: "Computador", valor: 4000},
    {numero: "789", produto: "Tablet", valor: 2000},
    {numero: "101", produto: "Notebook", valor: 3000},
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
});

//exportando o objeto router
export default router;