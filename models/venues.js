const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const venueSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type:String,
        required: true
    },
    company_id: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Company'
    }
},{ timestamps: true })

const Venue = mongoose.model('Venue',venueSchema);
module.exports = Venue;