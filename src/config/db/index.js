const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/event_dev");
        console.log("connection successful");
    }
    catch (err) {
        console.log("connection failed");
    }
}

module.exports = {connect};