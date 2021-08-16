const db = require('./models/index.js')

// A query to delete all of the appointments
db.Nails.deleteMany({}, (err) => {
    console.log ('Deleted all appointments!')
})