const admin = require("firebase-admin");

const serviceAccount = require('../../firebase-admin-config.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://chat-app-741c9.firebaseio.com"
});

module.exports = admin;
