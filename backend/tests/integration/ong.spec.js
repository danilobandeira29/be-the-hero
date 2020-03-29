//utilizar a biblioteca supertest para realizar chamadas API para os teste, ja que o axios não é recomendado para isso
const request = require('supertest');
const app = require('../../src/app');

const connection = require('../../src/database/connection');


describe('ONG', () => {

    /**
     * Antes de inserir os dados abaixo na tabela, devemos executar o migrate para a criação da tabela no test.sqlite
     */
    beforeEach( async () => {
        await connection.migrate.rollback();//desfazer um migrate latest de outro teste, para evitar encher o banco. desfaz e depois refaz para aquele teste, preenche e no prox teste, desfaz...
        await connection.migrate.latest(); // mesma coisa do npm knex migrate:make create_ong
    });

    afterAll( async () => {
       await connection.destroy();
    })
    it('should be able to create a new ong',  async () => {
        const response =  await request(app)
        .post('/ongs')
        .send({
            name: "APAD",
            email: "contato@apad.com.br",
            whatsapp: "8600000000",
            city: "Rio do Sul",
            uf: "SC"
        })


        //console.log(response.body);

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    } )
})

/** Evitar esse erro utilizar o afterAll (async () => await connection.destroy())
 * A worker process has failed to exit gracefully and has been force exited.
 * This is likely caused by tests leaking due to improper teardown.
 * Try running with --runInBand --detectOpenHandles to find leaks.
 */