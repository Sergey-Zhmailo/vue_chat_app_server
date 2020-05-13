const admin = require('./admin');

async function verifyToken(token) {
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        return decodedToken;
    } catch (error) {
        return Promise.reject(error);
    }
}

module.exports = {
    verifyToken,
};
