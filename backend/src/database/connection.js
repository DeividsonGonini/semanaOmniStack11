const knex = require('knex');
const configuration = require('../../knexfile');

//connectando na conexao de desenvolvimento do arquivo knexfile
const connection = knex(configuration.development);

//exportando a conexao com o banco de dados
module.exports = connection;