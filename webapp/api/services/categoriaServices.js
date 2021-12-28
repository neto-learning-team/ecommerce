const knex = require('../querybuilder.js');


class CategoriaServices {
    async cadastrarCategoria(categoria) {
        const res = await knex
            .insert({ descricao: categoria.descricao }).into('categorias')
        return knex('categorias').where('id', res[0]).then(categoriaSalva => categoriaSalva[0]);
    }
}

module.exports = CategoriaServices;