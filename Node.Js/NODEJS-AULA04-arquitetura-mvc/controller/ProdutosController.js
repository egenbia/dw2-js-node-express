//Importando o express
import express from "express"
//Carregando na variável router o express.Router() que é responsável por gerenciar as rotas da aplicação
const router = express.Router()

//ROTA DE PEDIDOS
//não usamos mais app e sim router
router.get("/produtos", (req, res) => {
  // const produtos = ['Computador','Celular','Tablet','Notebook'];

  //Array de objetos com os produtos
  const produtos = [
    {nome: "Celular", preco: 3000},
    {nome: "Computador", preco: 4000},
    {nome: "Tablet", preco: 2000},
    {nome: "Notebook", preco: 3000}
  ];

  res.render("produtos", {
    produtos : produtos,
  });
});

//exportando o objeto router
export default router;