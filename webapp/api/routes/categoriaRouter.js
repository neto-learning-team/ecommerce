const { Router } = require('express');
const Categoria = require('../controllers/categoriaController')

const router = Router();

router.post("/categorias", Categoria.criarCategoria);
router.get("/categorias", () => {console.log("teste")});

module.exports = router;