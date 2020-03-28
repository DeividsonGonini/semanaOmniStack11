// importando o express
const express = require('express');

const cors = require('cors');
const { errors } = require('celebrate');

// importa o arquivo de rotas
//  ./ como é um arquivo, serve para referenciar a mesma pasta do arquivo index
const routes = require('./routes');

const app = express();

// utilizar o cors para Determina quem pode acessar a aplicação
app.use(cors());
//Quando estiver em produção
// app.use(cors({
//     origin:'http://meuapp.com'
// }));

// Utilizar antes de todas as rotas, fala para o express ir no corpo da requisição e converte o json para um objeto JavaScript 
app.use(express.json())
//tem que ser abaixo do express.json
app.use(routes);
app.use(errors());


module.exports = app;



