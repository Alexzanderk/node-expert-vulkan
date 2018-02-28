const { User } = require('../models');

module.exports = {
    async findUser(req, res, next) {
        try {
            if (req.session) {
                let user = await User.findById(req.session.userId);
                req.user = user;
                res.locals.user = user;

                next();
            } else {
                next();
            }
        } catch (error) {
            next(error);
        }
    },

    authenticated(req, res, next) {
        if (req.user) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    },

    unauthenticated(req, res, next) {
        if (!req.user) {
            next();
        } else {
            res.redirect('/');
        }
    },

    isAdmin(req, res, next) {
        if (User.isAdmin(req.user.role)) {
            next();
        } else {
            res.redirect('/');
        }
    }

};