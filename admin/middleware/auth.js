const { NotFoundError } = require('../../shared/utils/error');

module.exports = {
    isAdmin(req, res, next) {
        if (req.user.isAdmin) return next();
        
        next(new NotFoundError());
        // res.redirect('/');
    }
};