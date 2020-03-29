const express = require('express'); //import module
const routes = require('./routes');
const cors = require('cors');

const { errors } = require('celebrate');


const app = express(); //instace appplication

app.use(cors());
app.use(express.json()); // antes de todas as requisições e converter para JS
app.use(routes);
app.use(errors());
/**
* Rota(recurso completo: endereço + recursos) e Recurso(chamado em todo sistema de backend):
*   Rotas: endereço html -> localhost:3333
*   Recursos: associado a uma tabela ou entidade do banco de dados, vem depois da barra /users 
*/

/** API >>
 * Métodos HTTP (questao semantica, tendo em vista que tudo se resume a GET)
 *  GET: Buscar/listar informação do back-end
 *  POST: Criar uma informação no back-end
 *  PUT: Alterar uma informação no back-end
 *  DELETE: Deletar uma informação no back-end
 */


 /**
  * Tipos de parâmetros:
  * Query Params: Parâmetros nomeados enviados na rota após "?"; EX: localhost/users?name=Danilo&idade=26&page=2
  * Route Params: Parâmetros utilizados para identificar um unico recurso; EX: pegar dados de um UNICO usuario; localhost/users/1 ##Rever esse conceito
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos; JSON no body do post no Insomnia
  */


module.exports = app;


