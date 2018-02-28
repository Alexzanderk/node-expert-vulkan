const passport = require('passport');

require('./local');
require('./github');
const { User } = require('../../models');

passport.serializeUser((user, done) => {
    done(null, user._id);
});
passport.deserializeUser((userId, done) => {
    User.findById(userId, done);
});



module.exports = passport;