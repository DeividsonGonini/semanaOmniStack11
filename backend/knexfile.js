// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: 'src/database/db.sqlite'
    },
    //diretorio das migrations
    migrations: {
      directory: './src/database/migrations'
    },
    // para que o valor padrao das colunas do banco de dados seja vazio
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: 'src/database/test.sqlite'
    },
    //diretorio das migrations
    migrations: {
      directory: './src/database/migrations'
    },
    // para que o valor padrao das colunas do banco de dados seja vazio
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
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
      user: 'username',
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
