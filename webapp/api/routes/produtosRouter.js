const { Router } = require('express');
const Produto = require('../../controllers/produtoController')

const router = Router();

router.get("/produtos", Produto.listarProdutos);