const mongoose = require('mongoose')

// The Schema
const nailSchema = new mongoose.Schema({
    service: { type: String, required: true },
    name: { type: String, required: true },
    color: { type: String },
    shape: { type: String },
    date: { type: String },
    time: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

// The Model
const Nails = mongoose.model('Nails', nailSchema)

module.exports = Nails