const { Router } = require('express');
const Categoria = require('../controllers/categoriaController')

const router = Router();

router.post("/categorias", Categoria.criarCategoria);
router.get("/categorias", (req, res) => {res.status(200).json("teste")});

module.exports = router;