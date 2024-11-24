import { Sequelize } from 'sequelize';
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

export const sequelize = new Sequelize(
    DB_NAME || 'postgres',
    DB_USER || 'gamdom_sports_bet_db',
    DB_PASSWORD || 'postgres',
    {
        host: DB_HOST || 'localhost',
        dialect: 'postgres',
        port: 5432,
        logging: false,
    }
);