
import express from "express";
const router = express.Router();
// Importando o Model de local
import local from "../models/local.js";

// ROTA locais
router.get("/locais", function (req, res) {
  //SEÇECT * FROM locais
  local.findAll()
    .then((locais) => {
      res.render("locais", {
        locais: locais,
      });
      // catch -> Falha na resolução da promessa
    })
    .catch((error) => {
      console.log(error);
    });
});

// rota de cadastro de locais
router.post("/locais/new", (req, res) => {
  // Coletando os dados do formulário
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  local.create({
    // coluna : dado do form
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      res.redirect("/locais");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de exclusão de local
// :id é um parâmetro obrigatótio
router.get("/locais/delete/:id", (req, res) => {
  const id = req.params.id;
  // .destroy() -> excluir um registro do banco
  local.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/locais");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de edição de local
router.get("/locais/edit/:id", (req, res) => {
  const id = req.params.id;

  // Buscando o local pelo ID
  // findByPk() - > busca um registro pela chave primária
  local.findByPk(id).then((local) => {
    res.render("localEdit", {
      local: local,
    });
  });
});

// ROTA DE ALTERAÇÃO DE locais
router.post("/locais/update", (req, res) => {
  // Coletando dados do formulário
  const id = req.body.id
  const nome = req.body.nome
  const cpf = req.body.cpf
  const endereco = req.body.endereco
  local.update({
    nome : nome,
    cpf : cpf,
    endereco : endereco
  },
{ where : {id : id}}
).then(() => {
  res.redirect("/locais");
}).catch(error => {
  console.log(error)
})
})

export default router;