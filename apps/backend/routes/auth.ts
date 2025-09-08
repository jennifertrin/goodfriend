import express from 'express';
import passport from 'passport';
import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import { Strategy as InstagramStrategy } from 'passport-instagram';

const router = express.Router();

// LinkedIn OAuth
passport.use(new LinkedInStrategy({
  clientID: process.env.LINKEDIN_CLIENT_ID!,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
  callbackURL: process.env.LINKEDIN_CALLBACK_URL!,
  scope: ['r_liteprofile', 'r_emailaddress', 'w_member_social'],
}, (accessToken: string, refreshToken: string, profile: any, done: (err: any, user?: any) => void) => {
  // TODO: Find or create user in DB
  return done(null, profile);
}));

router.get('/linkedin', passport.authenticate('linkedin'));
router.get('/linkedin/callback', passport.authenticate('linkedin', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

// Instagram OAuth
passport.use(new InstagramStrategy({
  clientID: process.env.INSTAGRAM_CLIENT_ID!,
  clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
  callbackURL: process.env.INSTAGRAM_CALLBACK_URL!,
}, (accessToken: string, refreshToken: string, profile: any, done: (err: any, user?: any) => void) => {
  // TODO: Find or create user in DB
  return done(null, profile);
}));

router.get('/instagram', passport.authenticate('instagram'));
router.get('/instagram/callback', passport.authenticate('instagram', {
  successRedirect: '/',
  failureRedirect: '/login',
}));

export default router;
