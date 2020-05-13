const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    country: {
        type: String
    },
    city: {
        type: String
    }
});

mongoose.model('User', userSchema);

module.exports = mongoose.model('User');
