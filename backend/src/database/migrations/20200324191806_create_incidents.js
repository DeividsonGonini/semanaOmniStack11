
exports.up = function (knex) {
    return knex.schema.createTable('incidents', function (table) {
        //chave primaria auto increments
        table.increments();
        // Coluna de string que nao pode ser nulo
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        // criando um relacionamento (onde a coluna vai armazenar o id da ong)
        table.string('ong_id').notNullable();
        //relacionando via chave estrangeira toda vez que o ong_id for preenchido tem que ser um id da tabela ong
        //ong_id referencia a coluna id da tabela ong
        table.foreign('ong_id').references('id').inTable('ongs');
    });

};

exports.down = function (knex) {
    return knex.schema.dropTable('incidents')

};
