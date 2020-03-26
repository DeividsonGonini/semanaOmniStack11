const connection = require('../database/connection');

module.exports = {

    async index(req, res) {
        // se nao tem uma pagina definida, começa da pagina 1
        const { page = 1 } = req.query;

        //como cria um array colocando a constante entre cochetes significa que pegara a posição 0
        const [count] = await connection('incidents').count();


        const incidents = await connection('incidents')
            //pegar os dados de outra tabela com o join (que junta as tabelas)
            //esta pegando os dados da tabela ongs, onde o campo ongs.id é igual '=' ao campo ong_id da tabela incidents
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            // limitando a 5 registros por pagina
            .limit(5)
            //pular 5 registros para começar a pegar os outros para fazer a pagina
            .offset((page - 1) * 5)
            //para selecionar todos os campos: 'tabela.*'
            //para selecionar campos específicos: 'tabela.campo'
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        res.header('X-Total-Counts', count['count(*)']);
        return res.json(incidents);
    },
    //a função é assincrona por tem que aguardar a inserção do dado
    async create(req, res) {
        const { title, description, value } = req.body;
        // dados do cabeçalho onde vai a autenticação
        const ong_id = req.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        //mandar com {} para o front-end saber que é um id
        return res.json({ id })
    },

    async delete(req, res) {
        const { id } = req.params;
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents')
            //onde o id = id
            .where('id', id)
            //seleciona o campo ong_id
            .select('ong_id')
            //traz so o primeiro resultado
            .first()

        //se o ong_id do banco de dados for diferente do ong_id que esta logado na aplicação...
        if (incident.ong_id != ong_id) {
            //status 401 que nao tem permissão
            return res.status(401).json({ error: 'Operation not permitted.' })
        }
        await connection('incidents').where('id', id).delete();
        //status 204 quando retorna uma resposta para o front que nao tem conteudo
        return res.status(204).send();
    }
};