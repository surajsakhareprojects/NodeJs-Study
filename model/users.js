const mongooes = require('mongoose');


const schemaUsers = new mongooes.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number
    },
    gender: {
        type: String
    }
}, { timestamps: true});

const modelUser = mongooes.model('users', schemaUsers);

module.exports = modelUser;
