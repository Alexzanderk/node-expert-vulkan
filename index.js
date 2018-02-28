const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const config = require('./shared/config');
const { error, auth } = require('./shared/middleware');
const { db, passport } = require('./shared/services');

const main = require('./main');
const admin = require('./admin');

const server = express();

server.disable('view cache');

server.set('views', config.paths.views);
server.set('view engine', 'pug');
server.set('config', config);

server.locals.version = config.version;
server.locals.basedir = config.paths.views;

server.use(express.static(config.paths.public));
server.use('/lib', express.static(config.paths.lib));
server.use(express.urlencoded({ extended: false }));
server.use(logger('dev'));
server.use(session({
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

server.use(passport.initialize());
server.use(passport.session());

server.use('/', main);
server.use('/admin', auth.authenticated, admin);

server.use(error.notFound);
server.use(server.get('env') === 'development' ? error.development : error.production);

// require('./utils/browserSync');
server.listen(config.port, () => console.log('server worker...', config.port));