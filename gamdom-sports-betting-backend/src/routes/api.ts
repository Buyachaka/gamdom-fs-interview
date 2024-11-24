import Event from "../db/models/Events";
import passport from "../authentication/passport";

export default function (router: any) {

    router.get('/', async (req: any, res: any) => {
        res.json({ message: 'Welcome to the Sports Betting API!' });
    });

    router.get("/protected", (req: any, res: any) => {
        if (req.isAuthenticated()) {
            res.json({ message: "You have access", user: req.user });
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    });

    router.post("/login", passport.authenticate("local"), (req: any, res: any) => {
        res.json({ message: "Login successful", user: req.user });
    });


    router.get('/football/events', async (req: any, res: any) => {
        if (req.isAuthenticated()) {
            try {
                const events = await Event.findAll();
                res.json(events);
            } catch (error) {
                console.log (error)
                res.status(500).send('Internal Server Error');
            }
        }
        else {
            res.status(401).json({ message: "Unauthorized" });
        }


    });
}
