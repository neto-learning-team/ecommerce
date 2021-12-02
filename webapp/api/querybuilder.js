const knex = require('knex')({

  client: 'mysql',
  connection: {
    host: `${process.env.HOST}`,
    port: '3306',
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  },
  debug: true
});
module.exports = knex;