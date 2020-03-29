const knex = require('knex'); // import knex
const configuration = require('../../knexfile'); //import knexfile.js from backend


/**
 * Váriavel ambiente => process.env.NODE_ENV
 *  for igual a 'test', como ta enviando no script test no JSON, sera utilizado configuration.test
 * senao, configuration.development
 */
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development
const connection = knex(config); // connection development/test from knexfile.js

module.exports = connection; //export connection