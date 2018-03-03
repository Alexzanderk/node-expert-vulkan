const { passport } = require('../../shared/services');

module.exports = {
    github: {
        authenticate: passport.authenticate('github'),
        callback:passport.authenticate('github', {
            successRedirect: '/',
            failureRedirect: '/auth/login'
        }),
    },
    facebook: {
        authenticate: passport.authenticate('facebook', {scope : 'email'}),
        callback:passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/auth/login'
        }),
    }
};