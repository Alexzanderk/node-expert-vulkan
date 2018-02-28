const { passport } = require('../../shared/services');

module.exports = {
    github: {
        authenticate: passport.authenticate('github'),
        callback:passport.authenticate('github', {
            successRedirect: '/',
            failureRedirect: '/auth/login'
        }),
    }
};