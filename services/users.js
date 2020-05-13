const User = require('../models/user');

async function createUser(data) {
    try {
        const user = await User.updateOne(
        { email: data.email },
        data,
            { upsert: true }
        );
        return user;
    } catch (error) {
        return Promise.reject(error);
    }
}
async function getUser(id) {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        return Promise.reject(error);
    }
}

module.exports = {
    createUser,
    getUser
}
