require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const session = require('express-session')
const rowdy = require('rowdy-logger')
const nailController = require('./controller/nailController.js')
const db = require('./models/index.js')

///////////// Configuration ///////////// 
const app = express()
const PORT = 4000
const rowdyResults = rowdy.begin(app)
app.set('view engine', 'ejs')

///////////// Middleware ///////////// 
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))
// app.use(session({ secret: process.env.SESSION_SECRET }))

///////////// Controllers ///////////// 
app.use('/nails', nailController)


/////// Routes ///////
app.get('/', (req, res) => {
  res.render('index.ejs');
})

// Signup Route - Shows a Signup Form
app.get('/signup', (req, res) => {
  res.render('auth/signup.ejs');
});

// Login Route - Shows a Login Form
app.get('/login', (req, res) => {
  res.render('auth/login.ejs');
});

// Logout Route
app.get('/logout', (req, res) => {
  res.send('You logged out.')
})


///////////// Start the Server ///////////// 
app.listen(process.env.PORT || PORT, () => {
    console.log(`Your server is running on localhost:${PORT} 🚀`);
    rowdyResults.print()
  })