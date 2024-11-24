import {Event} from "../db/models/Events";

export default function (router: any) {

    router.get('/', async (req: any, res: any) => {
        res.json({ message: 'Welcome to the Sports Betting API!' });
    });


    //This is real football not "soccer"
    router.get('/football/events', async (req: any, res: any) => {
        try {
            const events = await Event.findAll();
            res.json(events);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    });
}
