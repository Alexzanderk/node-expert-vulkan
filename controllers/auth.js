const { User }  = require('../models');


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

    async register(req, res, next) {
        try {
            let { email, password, confirmPassword } = req.body;
    
            if (!email || !password) return next(new Error());
            else if (password !== confirmPassword) return next(new Error());
    
            let user = await User.create(req.body);
            req.session.userId = user.id;
            res.redirect('/admin');
        } catch (error) {
            next(error);
        }
    },

    login(req, res, next) {
        let { contactName: email, contactPhone: password } = req.body;
        
        if (!email || !password) {
            let error = new Error('Необходимо ввести логин и пароль');
            error.status = 401;
            return next(error);
        }
        
        User.authenticate(email, password)
            .then(user => {
                req.session.userId = user.id;
                res.redirect('/');
            })
            .catch(next);
    }

};