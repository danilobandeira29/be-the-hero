const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// criar dados na tabela ongs
routes.post('/ongs', OngController.create) // '/' rota raiz 
// listar todos as ongs da tabela ongs
routes.get('/ongs', OngController.index) 


routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);


routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create); // estou querendo criar uma sessao, por isso o post


module.exports = routes; //exportar no node