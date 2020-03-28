const generateUniqueId = require('../utils/generateUniqueId')

//importando a conexao com o banco de dados
const connection = require('../database/connection');
// importando pacote de criptografi para gerar o id randomico
const crypto = require('crypto')

module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    },



    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;
        // atribuindo um numero randomico com o cripto pelo pacote crypt com 4 bytes em hexadecimal
        const id = generateUniqueId();

        //inserindo no banco de dados (tem que colocar as colunas que serao inseridas)
        // await para aguardar a inserção para depois retornar o res.json abaixo
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return res.json({ id });
    }
};