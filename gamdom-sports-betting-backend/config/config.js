require('dotenv').config(); // Load .env variables

module.exports = {
  development: {
    username: process.env.DB_USER || 'default_user',
    password: process.env.DB_PASSWORD || 'default_password',
    database: process.env.DB_NAME || 'default_database',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
  },
  test: {
    username: process.env.DB_USER || 'default_user',
    password: process.env.DB_PASSWORD || 'default_password',
    database: process.env.DB_NAME || 'default_database',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
  },
  production: {
    username: process.env.DB_USER || 'default_user',
    password: process.env.DB_PASSWORD || 'default_password',
    database: process.env.DB_NAME || 'default_database',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
  },
};
