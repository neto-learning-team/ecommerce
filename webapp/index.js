const express = require('express');
const app = express();
const port = 3000;
const routes = require('./api/routes')
const path = require('path');

app.set('views', __dirname + '/front/src');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static(path.join(__dirname, '/front/src/public')));

routes(app);


//app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening at http://dev.localhost:${port}`)
})
module.exports = app;
