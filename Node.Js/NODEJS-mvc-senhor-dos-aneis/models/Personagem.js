import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Personagem = connection.define('Personagens', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    raca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    arma: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
Personagem.sync({force: false})

export default Personagem;