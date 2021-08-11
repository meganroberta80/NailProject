///////////// Routes ///////////// 
// Express Router
const express = require('express');
const db = require('../models/index.js');
const router = express.Router();


// Home Page
// Ask Michael about this.


// Service Selection Page
// Index Route
router.get('/', (req, res) => {
    db.Nails.find({}, (err, allNails) => {
        if (err) return console.log(err)

        res.render('index.ejs', {
            allNails: allNails
        })
    })
})

// Create Appointment Page
// New Route
// Show buttons 
// Book appointment route
router.get('/new', (req, res) => {
    res.render('Nails/nailsNew.ejs')
})

router.get('/new/:nailService', (req, res) => {
    res.render('Nails/nailsBook.ejs', { nailService: req.params.nailService })
})

// Confirmation Page
// Show Route


// Edit Appointment Page
// Edit Route (link/button)

// Update Route


// Delete Route (link/button)

module.exports = router;