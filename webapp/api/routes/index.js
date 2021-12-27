const bodyParser = require('body-parser')
const categoria = require('./categoriaRouter');

module.exports = app => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        categoria,
    )
}