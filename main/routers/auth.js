const { Router } = require('express');
const { auth } = require('../../shared/middleware');
const router = Router();

const { auth: authController, oauth: oauthController } = require('../controllers');

router.route('/login')
    .all(auth.unauthenticated)
    .get(authController.showLoginPage)
    .post(authController.login);

router.get('/github', oauthController.github.authenticate);
router.get('/github/callback', oauthController.github.callback);

router.get('/facebook', oauthController.facebook.authenticate);
router.get('/facebook/callback', oauthController.facebook.callback);

router.route('/registration')
    .all(auth.unauthenticated)
    .get(authController.showRegisterPage)
    .post(authController.register);

router.get('/logout', authController.logout);

module.exports = router;
