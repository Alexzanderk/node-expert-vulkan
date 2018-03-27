const path = require('path');

const ROOT_PATH = path.resolve(__dirname, '..', '..');

module.exports = {
    version: '1.0.1',
    port: process.env.PORT || 3000,
    paths: {
        views: path.resolve(ROOT_PATH, 'main', 'views'),
        public: path.resolve(ROOT_PATH, 'shared', 'public'),
        lib: path.resolve(ROOT_PATH, 'node_modules'),
        sourceTemplate: path.resolve(ROOT_PATH, 'source', 'template')
    },
    mongodbUrl: 'mongodb://localhost:27017/vulkan',
    mongodbMlab: process.env.MONGODB_MLAB_URL,
    sessionSecret: 'CR,>Ekw?=#XZzch8%fWKt7',
    oauth: {
        github: {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callback: process.env.GITHUB_CLIENT_CALLBACK
        },
        facebook: {
            clientID: process.env.FACEBOOK_APP_ID,
            clientSecret: process.env.FACEBOOK_APP_SECRET,
            callbackURL: process.env.FACEBOOK_APP_CALLBACK,
            profileFields: ['id', 'email']
        }
    },
    sendPulse: {
        userId: process.env.SENDPULSE_API_USER_ID,
        secret: process.env.SENDPULSE_API_SECRET,
        token: process.env.SENDPULSE_TOKEN_STORAGE
    }

};