import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { sequelize } from './db/db';
import Users from "./db/models/Users";
import apiRoutes from './routes/api';
import cors from 'cors';
import passport from 'passport';
import session from "express-session";
const router = express.Router();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(
    session({
        secret: "secretKey",
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            sameSite: "lax",
        },
    })
);
app.use(passport.initialize());
app.use(passport.session());
apiRoutes(router);
app.use(`/api`, router);


sequelize.authenticate()
    .then(() => {
        return sequelize.sync({ alter: true });
    })
    .then(async () => {
        console.log('Database synced.');

        await Users.findOrCreate({
            where: { username: 'admin' },
            defaults: {
                password: 'admin',
            },
        });
        console.log('Sample admin user seeded.');
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

export default app;


