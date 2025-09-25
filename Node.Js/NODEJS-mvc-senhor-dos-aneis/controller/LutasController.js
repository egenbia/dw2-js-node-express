import express from "express";
const router = express.Router();

router.get("/lutas", (req, res) => {
  const lutas = [
    { nome: "Batalha do Abismo de Helm", vencedor: "Rohan" },
    { nome: "Batalha de Minas Tirith", vencedor: "Gondor" },
    { nome: "Confronto com Balrog", vencedor: "Gandalf" },
    { nome: "Confronto na Montanha da Perdição", vencedor: "Frodo" },
    { nome: "Batalha de Isengard", vencedor: "Rohan" }
  ];
  res.render("lutas", { lutas });
});

export default router;
