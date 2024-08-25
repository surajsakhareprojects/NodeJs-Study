const mongoose = require('mongoose');

async function connectMongoDB(url) {
    console.log('connection established.');
    return mongoose.connect(url);
}

module.exports = {
    connectMongoDB
}