const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    account: {
        type: String,
       
    },
    password: {
        type: String,
     
    },
    type:{
        type:String,
    },

    decks: [{
        type: Schema.Types.ObjectId,
        ref: 'Deck'
    }]
})

const Admin = mongoose.model('Admin', AdminSchema)

module.exports = Admin;