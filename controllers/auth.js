const { User }  = require('../models');
const { passport } = require('../services');

module.exports = {

    // GET /
    showLoginPage(req, res, next) {
        res.render('auth', {
            id: 'auth-login',
            title: 'Вход'
        });
    },

    showRegisterPage(req, res, next) {
        res.render('reg', {
            id: 'auth-registration',
            title: 'Регистрация'
        })
    },

    logout(req, res, next) {
        if (req.session) {
            req.session.destroy(error => {
                if (error) return next(error);

                res.redirect('/');
            });
        }
    },

    register: passport.authenticate('local-register', {
        successRedirect: '/',
        failureRedirect: '/auth/login'
    }),

    login: passport.authenticate('local-login', {
        successRedirect: '/admin',
        failureRedirect: '/auth/login'
    }),

};