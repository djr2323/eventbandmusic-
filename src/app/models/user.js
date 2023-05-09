const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
    username:{type:String},
    password:{type:String}
},{timestamps:true});

module.exports = mongoose.model('User', user);