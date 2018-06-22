const sendpulse = require("sendpulse-api");
const config = require('../config');
//@codedojo
var API_USER_ID = config.sendPulse.userId;
var API_SECRET = config.sendPulse.secret;
var TOKEN_STORAGE = config.sendPulse.token;

sendpulse.init(API_USER_ID,API_SECRET,TOKEN_STORAGE);

function send(email) {
    return new Promise((resolve, reject) => {
        sendpulse.smtpSendMail(data => {
            if ('error_code' in data) {
                reject(new Error(data.message));
            } else {
                resolve();
            }
        }, email);
    });
};

module.exports = {
    sendpulse,
    send
};