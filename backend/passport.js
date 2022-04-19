const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "37308987125-2frrmu5lrm48t35gmv1r1a1t6r7m2fi2.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";


passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null,profile)
}
));

passport.serializeUser((user,done) => {
  done(null,user)
});

passport.deserializeUser((user,done) => {
  done(null,user)
});