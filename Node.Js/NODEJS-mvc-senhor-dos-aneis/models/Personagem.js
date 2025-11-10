import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Personagem = connection.define('Personagens', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
Personagem.sync({force: false})

export default Personagem;