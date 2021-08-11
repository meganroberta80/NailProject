const mongoose = require('mongoose')

// The Schema
const nailSchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String },
    shape: { type: String },
    date: { type: String },
    time: { type: String }
})

// The Model
const Nails = mongoose.model('Nails', nailsSchema)

module.exports = Nails