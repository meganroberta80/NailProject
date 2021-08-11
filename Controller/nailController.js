///////////// Routes ///////////// 
// Express Router
const express = require('express');
const db = require('../models/index.js');
const router = express.Router();





// Index Route (Service Selection Page)
router.get('/', (req, res) => {
    db.Nails.find({}, (err, allNails) => {
        if (err) return console.log(err);
        
        
        res.render('NailsRus/nailsIndex.ejs', {
            allNails: allNails
    });
    })
})


// New Route (Create Appointment Page)
router.get('/new', (req, res) => {
    res.render('NailsRus/nailsNew.ejs')
})

router.get('/new/:nailService', (req, res) => {
    res.render('NailsRus/nailsBook.ejs', { nailService: req.params.nailService })
})


// Show Route (Confirmation Page)
router.get('/:nailId', (req, res) => {
    db.Nails.findById(req.params.nailId, (err, foundNail) => {
        if (err) return console.log(err);
        
        
        res.render('show.ejs', { oneNail: foundNail })
    })
})

// Create Route //
router.post('/', (req, res) => {
    db.Nails.create(req.body, (err, createdNails) => {
        if (err) return console.log(err);
        
        //console.log(req.body)
        
        res.redirect('NailsRus/nailsIndex');
    });
})


// Edit Route (Edit Appointment Page)
router.get('/:nailId/edit', (req, res) => {
    db.Nails.findById(req.params.nailId, (err, foundNail) => {
        if (err) return console.log(err);

        res.render('edit.ejs', { oneNail: foundNail });
    })
})





// Update Route


// Delete Route (link/button)

module.exports = router;