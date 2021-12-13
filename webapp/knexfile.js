// Update with your config settings.
require('dotenv').config({ path: '..//.env' })

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : `${process.env.HOST}`,
      port : '3306',
      user : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASSWORD,
      database :  process.env.MYSQL_DATABASE
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
