const passport = require('passport');
const { Strategy: FacebookStrategy } = require('passport-facebook');
const { User } = require('../../models');

const config = require('../../config');

passport.use(new FacebookStrategy(config.oauth.facebook, (accessToken, refreshToken, profile, done) => {
    // let email = profile.emails[0].value;
    console.log(profile);
    // User.findOneAndUpdate({email}, {
        // email,

    // }, {upsert: true, new: true}, done);
}));