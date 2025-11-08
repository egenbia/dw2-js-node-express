import express from "express";
const router = express.Router()
// Importando o Model de usuário
import User from "../models/User.js";

// Rota de LOGIN
router.get("/login", (req,res) => {
    res.render("login");
});

// ROTA de CADASTRO
router.get("/cadastro", (req,res) => {
    res.render("cadastro");
});

// ROTA de CRIAÇÃO de Usuário
router.post("/createUser", (req, res) => {
    // Coletando os dados do formulário
    const email = req.body.email
    const password = req.body.password
    // Enviando para o banco
    User.create({
        email: email,
        password: password
    }).then(() => {
        res.redirect("/login");
    }).catch(error => {
        console.log(error);
    });
});

export default router;