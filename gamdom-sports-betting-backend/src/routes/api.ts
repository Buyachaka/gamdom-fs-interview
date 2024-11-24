import Event from "../db/models/Events";
import passport from "../authentication/passport";
import { Router, Request, Response, NextFunction } from 'express';

export default function (router: any) {
    const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
        if (req.isAuthenticated && req.isAuthenticated()) {
            next();
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    };

    router.get('/', async (req: Request, res: Response) => {
        res.json({ message: 'Welcome to the Sports Betting API!' });
    });


    router.post("/login", passport.authenticate("local"), (req: Request, res: Response) => {
        res.json({ message: "Login successful", user: req.user });
    });


    router.get('/football/events', isAuthenticated, async (req: Request, res: Response) => {
        try {
            const events = await Event.findAll();
            res.json(events);
        } catch (error) {
            console.log (error)
            res.status(500).send('Internal Server Error');
        }
    });
}
