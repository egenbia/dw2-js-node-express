import express from "express";
const router = express.Router();
import Pedido from "../models/Pedido.js";

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  Pedido.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });
});
// rota de cadastro de pedidos
router.post("/pedidos/new", (req, res) => {
  // Coletando os dados do formulário
  const numero = req.body.numero;
  const valor = req.body.valor;
  Pedido.create({
    // coluna : dado do form
    numero: numero,
    valor: valor,
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de exclusão de pedido
// :id é um parâmetro obrigatótio
router.get("/pedidos/delete/:id", (req, res) => {
  const id = req.params.id;
  // .destroy() -> excluir um registro do banco
  Pedido.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de edição de pedido
router.get("/pedidos/edit/:id", (req, res) => {
  const id = req.params.id;

  // Buscando o pedido pelo ID
  // findByPk() - > busca um registro pela chave primária
  Pedido.findByPk(id).then((pedido) => {
    res.render("pedidoEdit", {
      pedido: pedido,
    });
  });
});

// ROTA DE ALTERAÇÃO DE pedidoS
router.post("/pedidos/update", (req, res) => {
  // Coletando dados do formulário
  const id = req.body.id
  const numero = req.body.numero
  const valor = req.body.valor
  Pedido.update({
    numero : numero,
    valor : valor,
  },
{ where : {id : id}}
).then(() => {
  res.redirect("/pedidos");
}).catch(error => {
  console.log(error)
})
})

export default router;