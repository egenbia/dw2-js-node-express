import express from "express";
const router = express.Router();

router.get("/personagens", (req, res) => {
  const personagens = [
    { nome: "Frodo Baggins", raca: "Hobbit", arma: "Anel" },
    { nome: "Gandalf", raca: "Mago", arma: "Cajado" },
    { nome: "Aragorn", raca: "Humano", arma: "Espada" },
    { nome: "Legolas", raca: "Elfo", arma: "Arco" },
    { nome: "Gimli", raca: "Anão", arma: "Machado" }
  ];
  res.render("personagens", { personagens });
});

export default router;
