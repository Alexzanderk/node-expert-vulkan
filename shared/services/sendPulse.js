const sendpulse = require("sendpulse-api");
const config = require('../config');
//@codedojo
var API_USER_ID = config.sendPulse.userId;
var API_SECRET = config.sendPulse.secret;
var TOKEN_STORAGE = config.sendPulse.token;

sendpulse.init(API_USER_ID,API_SECRET,TOKEN_STORAGE);

module.exports = sendpulse;