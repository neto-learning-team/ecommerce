const { CategoriaServices } = require('../services');

const categoriaServices = new CategoriaServices();

class CategoriaController {
    static async criarCategoria(req, res) {
        
        const descricao = req.body;
        if (descricao != undefined && descricao != null) {
            try {
                const json = await categoriaServices.cadastrarCategoria(descricao);
                return res.status(201).json(json);
            } catch (error) {
                const objErrors = {};
                error.errors.map((e) => {
                    objErrors[e.path] = e.message;
                });
                return res.status(422).json(objErrors);
            }
        }else{
            return res.status(400)
        }
    }
}

module.exports = CategoriaController;