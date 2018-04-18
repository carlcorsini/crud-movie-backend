// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'the_movies'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },
  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'the_movies_test'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection:
      'postgres://qqzestzvdyvtty:2af3a5296dd198166dcfe914cfe4ca6bdc8e7dac57e14428dedcd337fa39fa01@ec2-54-221-192-231.compute-1.amazonaws.com:5432/d58bknpt0bk8fs',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
}
