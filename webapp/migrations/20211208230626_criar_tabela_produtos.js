exports.up = async function (knex) {
    knex.schema.hasTable('produtos').then(async function (exists) {
        if (!exists) {
           await knex.schema.createTable('produtos', function (table) {
                table.increments();
                table.text('nome').notNullable();
                table.text("descricao").notNullable();
                table.text("slug").notNullable();
                table.decimal("valor", 6, 3).notNullable();
                table.integer("estoque").notNullable();
                table.integer("fk_produtos_categorias").unsigned().references('id').inTable('categorias');;
                
            });
        };
    });
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists('produtos').dropTableIfExists('categorias');
};
