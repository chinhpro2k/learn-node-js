const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    planName: {
        type: String
    },
    content: {
        type: String
    },
    point: {
        type: Number,
       
    }
})

const Plan = mongoose.model('Plan', PlanSchema)

module.exports = Plan;