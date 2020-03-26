const knex = require('knex'); // import knex
const configuration = require('../../knexfile'); //import knexfile.js from backend

const connection = knex(configuration.development); // connection development from knexfile.js

module.exports = connection; //export connection