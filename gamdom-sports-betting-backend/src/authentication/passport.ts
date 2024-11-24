import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../db/models/Users";
import bcrypt from "bcryptjs";

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ where: { username } });
            if (!user) {
                return done(null, false, { message: "Invalid username" });
            }

            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                return done(null, false, { message: "Invalid password" });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    })
);

passport.serializeUser((user: any, done) => {
    done(null, user.user_id);
});

passport.deserializeUser(async (id: number, done) => {
    try {
        const user = await User.findByPk(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

export default passport;
