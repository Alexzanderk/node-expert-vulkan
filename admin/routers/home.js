const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {
        id: 'admin',
        currentUrl: req.originalUrl
    });
});

module.exports = router;