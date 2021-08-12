///////////// Routes ///////////// 
// Express Router
const express = require('express');
const db = require('../models/index.js');
const router = express.Router();


// Index Route (Service Selection Page)
router.get('/', (req, res) => {
    db.Nails.find({}, (err, allNails) => {
        if (err) return console.log(err);
        
        
        res.render('nailsRUs/nailsIndex.ejs', {
            allNails: allNails
    });
    })
})


// New Route (Create Appointment Page)
router.get('/new', (req, res) => {
    res.render('nailsRUs/nailsNew.ejs')
})

router.get('/new/:nailService', (req, res) => {
    res.render('nailsRUs/nailsBook.ejs', { nailService: req.params.nailService })
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
        
        res.redirect('/nails');
    });
})


// Edit Route (Edit Appointment Page)
router.get('/:nailId/edit', (req, res) => {
    db.Nails.findById(req.params.nailId, (err, foundNail) => {
        if (err) return console.log(err);

        res.render('nailsRUs/nailsedit.ejs', { oneNail: foundNail });
    })
})


// Update Route
router.put('/:nailId', (req, res) => {
    db.Nails.findByIdAndUpdate(req.params.nailId, req.body, (err, updateNail) => {
        if (err) return console.log(err);
        
        res.redirect('/nails/' + req.params.nailId);
    })
})


// Delete Route (link/button)
router.delete('/:nailId',(req, res) => {
    db.Nails.findByIdAndDelete(req.params.nailId, (err) => {
        if (err) return console.log(err);
        res.redirect('/nails');
    })
    
})

module.exports = router;