const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');

const config = require('./config');
const { error, auth } = require('./middleware');
const db = require('./services/db');
const routers = require('./routers');
const admin = require('./admin');

const app = express();

app.disable('view cache');

app.set('views', config.paths.views);
app.set('view engine', 'pug');
app.set('config', config);

app.locals.version = config.version;
app.locals.basedir = config.paths.views;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/lib', express.static(config.paths.lib));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    name: 'sessionId',
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        // secure: true,
        signed: true,
        maxAge: 1000 * 60 * 60 * 24 * 3 // 3 days
    },
    store: new MongoStore({
        mongooseConnection: db.connection,
        ttl: 60 * 60 * 24 *3,
        touchAfter: 60 * 60 * 24
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(auth.findUser);

app.use('/', routers.main);
app.use('/news-catalog', routers.news);
app.use('/product-catalog', routers.product);
app.use('/auth', routers.auth);

app.use(auth.authenticated);
app.use('/admin', admin);

app.use(error.notFound);
app.use(app.get('env') === 'development' ? error.development : error.production);

// require('./utils/browserSync');
app.listen(config.port, () => console.log('server worker...', config.port));