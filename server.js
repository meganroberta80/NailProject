const express = require('express')
const methodOverride = require('method-override')
const rowdy = require('rowdy-logger')
const nailController = require('./controller/nailController.js')

///////////// Configuration ///////////// 
const app = express()
const PORT = 4000
const rowdyResults = rowdy.begin(app)
app.set('view engine', 'ejs')

///////////// Middleware ///////////// 
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))

///////////// Controllers ///////////// 
app.use('/nails', nailController)


///////////// Start the Server ///////////// 
app.listen(PORT, () => {
    console.log(`Your server is running on localhost:${PORT} 🚀`);
    rowdyResults.print()
  })