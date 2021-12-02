const express = require('express');
const app = express();
const port = 3000;
const routes = require('./api/routes')

routes(app); 
//app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening at http://dev.localhost:${port}`)
})
module.exports = app;
