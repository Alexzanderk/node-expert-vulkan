const { Router } = require('express');
const { auth } = require('../middleware');
const router = Router();

const { auth: controller } = require('../controllers');

router.route('/login')
    .all(auth.unauthenticated)
    .get(controller.showLoginPage)
    .post(controller.login);

router.route('/registration')
    .all(auth.unauthenticated)
    .get(controller.showRegisterPage)
    .post(controller.register);

router.get('/logout', controller.logout);

module.exports = router;
