const bodyParser = require('body-parser')
const categoria = require('./categoriaRouter');
const loja = require('./frontRouter')

const subdomain = require('express-subdomain');

module.exports = app => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loja,
        subdomain('api', categoria),
    )
}