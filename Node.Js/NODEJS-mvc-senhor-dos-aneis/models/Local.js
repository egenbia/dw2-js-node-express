// É no Model que criadores a estrutura da tabela no banco de dados
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// Definindo a estrutura da tabela
const Local = connection.define('Locais', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
// Sincronizando a tabela com o banco de dados
Local.sync({force: false})

export default Local;