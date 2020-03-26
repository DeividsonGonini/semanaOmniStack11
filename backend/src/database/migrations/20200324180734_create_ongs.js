
// Responsavel pela criação da tabela
exports.up = function (knex) {
    return knex.schema.createTable('ongs', function (table) {
        //a coluna sera a primary
        table.string('id').primary();
        // Coluna de string que nao pode ser nulo
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        // segundo parametro sera o tamanho que ira ser armazenado (caso seja fixo)
        table.string('uf', 2).notNullable();

    });
};
// Caso precisa voltar atras da criação da tabela
exports.down = function (knex) {
    //ira deletar a tabela
    return knex.schema.dropTable('ongs');
};
