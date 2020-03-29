const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// criar dados na tabela ongs
/**
 * Validação utilizando biblioteca Joi, que está inserida na biblioteca celebrate, mas que é especifica para Express.
 */
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create) 


// listar todos as ongs da tabela ongs
/**
 * Verificação no HEADER
 */
routes.get('/ongs', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}), OngController.index) 

/**
 * Fazer validação desse caso depois que acabar o vídeo
 * Validação do HEADERS, verificar o ID
 * Validação do BODY, verificar os atributos
 */
routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),

    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    })
}), IncidentController.create);


/**
 * Verificação para saber se a query params é um numero http://localhost:3333/incidents?page=2, por exemplo
 */
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

/**
 * Validação se o id passado é um número
 */
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);


/**
 * No caso de validação de HEADERS, devo passar o objeto na função object.
 * No lugar de .key() irei utilizar o .unknown(), pois existe ou pode existir propriedades no header que eu desconheço.
 */
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}), ProfileController.index);



routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}), SessionController.create); // estou querendo criar uma sessao, por isso o post


module.exports = routes; //exportar no node