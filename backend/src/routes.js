//importando o express
const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

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
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),


    })
}), OngController.create);


routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);


//Rotas para o Banco de dados index
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index)//lista


routes.post('/incidents', IncidentController.create)//cria

//o id sera utilizado para parametro de qual incidents sera deletado
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete)//deleta



// exportando as rotas
module.exports = routes;