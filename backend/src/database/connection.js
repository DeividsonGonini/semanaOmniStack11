const knex = require('knex');
const configuration = require('../../knexfile');

//variavel de ambiente
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

//connectando na conexao de desenvolvimento do arquivo knexfile
const connection = knex(config);

//exportando a conexao com o banco de dados
module.exports = connection;