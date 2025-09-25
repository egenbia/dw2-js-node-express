import express from "express";
const router = express.Router();

router.get("/locais", (req, res) => {
  const locais = [
    { nome: "Hobbiton", tipo: "Vila", descricao: "Casa dos Hobbits" },
    { nome: "Mordor", tipo: "Terra", descricao: "Terra do Senhor do Escuro" },
    { nome: "Rivendell", tipo: "Vale", descricao: "Refúgio dos Elfos" },
    { nome: "Gondor", tipo: "Reino", descricao: "Terra dos Homens" },
    { nome: "Isengard", tipo: "Fortaleza", descricao: "Local de Saruman" }
  ];
  res.render("locais", { locais });
});

export default router;
