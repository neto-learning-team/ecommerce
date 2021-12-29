const { Router } = require('express');

const router = Router();

router.get("/", (req, res) => {res.render('App')});

module.exports = router;