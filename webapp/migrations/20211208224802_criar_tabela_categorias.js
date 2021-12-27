
exports.up = async function (knex) {
    knex.schema.hasTable('categorias').then(async function (exists) {
        if (!exists) {
            await knex.schema.createTable('categorias', function (table) {
                table.increments().notNullable();
                table.text('descricao').notNullable();
            });
        };
    })
}

exports.down = async function (knex) {
    knex.schema.dropTableIfExists('categorias').dropTableIfExists('produtos');
};
