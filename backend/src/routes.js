//importando o express
const express = require('express');

//importando os Controles
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


//importando a conexao com o banco de dados
const connection = require('./database/connection')

const routes = express.Router();



routes.post('/sessions', SessionController.create);

//Rotas para o Banco de dados ongs
//rota para listar as ongs
routes.get('/ongs', OngController.index);
//rota para inserir ongs
routes.post('/ongs', OngController.create);


routes.get('/profile', ProfileController.index)


//Rotas para o Banco de dados index
routes.get('/incidents', IncidentController.index)//lista
routes.post('/incidents', IncidentController.create)//cria
//o id sera utilizado para parametro de qual incidents sera deletado
routes.delete('/incidents/:id', IncidentController.delete)//deleta



// exportando as rotas
module.exports = routes;