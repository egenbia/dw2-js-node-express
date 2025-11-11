// É no Model que criadores a estrutura da tabela no banco de dados
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// Definindo a estrutura da tabela
const Local = connection.define('Locais', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
// Sincronizando a tabela com o banco de dados
Local.sync({force: false})

export default Local;