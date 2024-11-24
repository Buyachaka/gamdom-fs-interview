import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { sequelize } from './db/db';
import { Event } from './db/models/Events';
import apiRoutes from './routes/api';
import cors from 'cors';
const router = express.Router();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())
apiRoutes(router);
app.use(`/api`, router);


sequelize.authenticate()
    .then(() => {
        return sequelize.sync({ force: true });
    })
    .then(async () => {
        console.log('Database synced.');
        await Event.bulkCreate([
            { event_name: 'Real Madrid   vs   Barcelona', homeOdds: 1.75, drawOdds: 2.00, awayOdds: 2.50 },
            { event_name: 'Boca Junior   vs   Flamengo ', homeOdds: 2.00, drawOdds: 2.25, awayOdds: 2.75 },
            { event_name: 'Liverpool   vs   Chelsea', homeOdds: 1.50, drawOdds: 2.00, awayOdds: 2.50 },
            { event_name: 'M.City   vs   Milan', homeOdds: 1.30, drawOdds: 2.00, awayOdds: 1.50 },
            { event_name: 'Benfica   vs   PSG', homeOdds: 3.50, drawOdds: 1.40, awayOdds: 2.2 },

        ]);
        console.log('Sample data seeded.');
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });


