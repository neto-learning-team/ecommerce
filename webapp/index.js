const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Worlrd!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://dev.localhost:${port}`)
})
