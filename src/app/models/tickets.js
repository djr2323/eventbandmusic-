const mongoose = require('mongoose')
const schema = mongoose.Schema;

const tickets = new schema({
    quantity : {type:String},
    email:{type:String}

},
{timestamps:true})

module.exports = mongoose.model('Tickets',tickets)