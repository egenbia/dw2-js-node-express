import express from "express";
const router = express.Router();
import luta from "../models/luta.js";

// ROTA lutaS
router.get("/lutas", function (req, res) {
  luta.findAll().then((lutas) => {
    res.render("lutas", {
      lutas: lutas,
    });
  });
});
// rota de cadastro de lutas
router.post("/lutas/new", (req, res) => {
  // Coletando os dados do formulário
  const numero = req.body.numero;
  const valor = req.body.valor;
  luta.create({
    // coluna : dado do form
    numero: numero,
    valor: valor,
  })
    .then(() => {
      res.redirect("/lutas");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de exclusão de luta
// :id é um parâmetro obrigatótio
router.get("/lutas/delete/:id", (req, res) => {
  const id = req.params.id;
  // .destroy() -> excluir um registro do banco
  luta.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/lutas");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de edição de luta
router.get("/lutas/edit/:id", (req, res) => {
  const id = req.params.id;

  // Buscando o luta pelo ID
  // findByPk() - > busca um registro pela chave primária
  luta.findByPk(id).then((luta) => {
    res.render("lutaEdit", {
      luta: luta,
    });
  });
});

// ROTA DE ALTERAÇÃO DE lutaS
router.post("/lutas/update", (req, res) => {
  // Coletando dados do formulário
  const id = req.body.id
  const numero = req.body.numero
  const valor = req.body.valor
  luta.update({
    numero : numero,
    valor : valor,
  },
{ where : {id : id}}
).then(() => {
  res.redirect("/lutas");
}).catch(error => {
  console.log(error)
})
})

export default router;