import express from "express";
const router = express.Router();
import personagem from "../models/personagem.js";

// ROTA personagens
router.get("/personagens", function (req, res) {
  personagem.findAll().then((personagens) => {
    res.render("personagens", {
      personagens: personagens,
    });
    })
});

// rota de cadastro de personagens
router.post("/personagens/new", (req, res) => {
  // Coletando os dados do formulário
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  personagem.create({
    // coluna : dado do form
    nome: nome,
    preco: preco,
    categoria: categoria,
  })
    .then(() => {
      res.redirect("/personagens");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de exclusão de personagem
// :id é um parâmetro obrigatótio
router.get("/personagens/delete/:id", (req, res) => {
  const id = req.params.id;
  // .destroy() -> excluir um registro do banco
  personagem.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/personagens");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de edição de personagem
router.get("/personagens/edit/:id", (req, res) => {
  const id = req.params.id;

  // Buscando o personagem pelo ID
  // findByPk() - > busca um registro pela chave primária
  personagem.findByPk(id).then((personagem) => {
    res.render("personagemEdit", {
      personagem: personagem,
    });
  });
});

// ROTA DE ALTERAÇÃO DE personagens
router.post("/personagens/update", (req, res) => {
  // Coletando dados do formulário
  const id = req.body.id
  const nome = req.body.nome
  const preco = req.body.preco
  const categoria = req.body.categoria
  personagem.update({
    nome : nome,
    preco : preco,
    categoria : categoria
  },
{ where : {id : id}}
).then(() => {
  res.redirect("/personagens");
}).catch(error => {
  console.log(error)
})
})

export default router;