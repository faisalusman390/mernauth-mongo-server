const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
       type: String,
       required: true 
    },
    tickets: {
        type:  Number,
        required: false
    },
    discription: {
        type: String,
        required: true 
     },
    venue_id : {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Venue'
    },
    company_id: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Company'
    }
}, { timestamps: true })

const Event = mongoose.model('Event',eventSchema);
module.exports = Event;