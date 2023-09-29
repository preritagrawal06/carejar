const mongoose = require('mongoose')
const Schema = mongoose.Schema

const doctorSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    speciality:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        required: true
    },
    fees:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    clinic:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    stories:{
        type: Number,
        required: true
    },

})

module.exports = mongoose.model('Doctor', doctorSchema)