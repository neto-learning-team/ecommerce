const express = require('express');
const app = express();
const port = 3000;
const routes = require('./api/routes')

console.log("teste");
app.get('/', (req, res) => {
  res.send('Hello World!')
})
routes(app);

app.listen(port, () => {
  console.log(`Example app listening at http://dev.localhost:${port}`)
})
module.exports = app;