const auth = require('../config/external-services/firebase/auth');

async function authMiddleware(req, res, next) {
    try {
        const { authorization = '' } = req.headers;
        // Bearer token
        const [, token] = authorization.split(' '); // [Bearer, token]
        console.log(token);
        const decodedToken = await auth.verifyToken(token);
        console.log(decodedToken);
        req.locals = { email: decodedToken.email };
        return next();
    } catch (error) {
        return res.status(401).send(error);
    }
}
module.exports = authMiddleware;
