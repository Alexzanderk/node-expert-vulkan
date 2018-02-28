module.exports = {
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
};