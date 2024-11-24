import { Sequelize } from 'sequelize';
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export const sequelize = new Sequelize(
    DB_NAME || 'postgres',
    DB_USER || 'postgres',
    DB_PASSWORD || 'admin',
    {
        host: DB_HOST || 'localhost',
        dialect: 'postgres',
        port: 5432,
        logging: false,
    }
);