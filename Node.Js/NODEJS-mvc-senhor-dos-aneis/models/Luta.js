
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Lutas = connection.define('Lutas', {
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
});
Lutas.sync({force: false})

export default Lutas;
