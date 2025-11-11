
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Lutas = connection.define('Lutas', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    vencedor: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
Lutas.sync({force: false})

export default Lutas;
