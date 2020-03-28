const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        //limpa o banco de dados antes do teste
        await connection.migrate.rollback();
        await connection.migrate.latest();

    });

    afterAll(async () => {
        await connection.destroy();
    });



    it('shoud be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            // for testar uma rota que necessite passar o header de autorização
            // .set('Authorization', '<colocar o id da ONG>')
            .send({
                name: "APAD 2",
                email: "contato@contato.com",
                whatsapp: "11995554321",
                city: "São Caetano do Sul",
                uf: "SP"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});