require('dotenv').config()
const express = require('express')
const rowdy = require('rowdy-logger')
const methodOverride = require('method-override')
const session = require('express-session')
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
app.use(session({ 'Random string!' }))

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

// Sign up a New User
app.post('/signup', (req, res) => {
  // 1. Take in the username and password from the form.
  console.log(req.body)
  // 2. Make a query to create a new User
  db.User.create(req.body, (err, createdUser) => {
    if (err) console.log(err)

    console.log(createdUser)
    // 3. Redirect to /login
    res.redirect('/login')
  })
})

// Login Route - Shows a Login Form
app.get('/login', (req, res) => {
  res.render('auth/login.ejs');
});

app.post('/login', (req, res) => {
  console.log(req.body)

  // 1. Check if the user passed in exists
  db.User.findOne({ username: req.body.username }, (err, foundUser) => {
    if (err) return console.log(err)

    // If the username is not correct, send them to the /login page
    if (!foundUser) {
      return res.redirect('/login')
    }
    
    // 2. Check if the password passed in matches the one on file
    if (req.body.password !== foundUser.password) {
      return res.redirect('/login')
    }

    // 3. Track the user in a cookie on their browser.
    
    res.send('You tried to log in')
  })
})

// Logout Route
app.get('/logout', (req, res) => {
  res.send('You logged out.')
})


///////////// Start the Server ///////////// 
app.listen(process.env.PORT || PORT, () => {
  console.log(`Your server is running on localhost:${PORT} 🚀`);
  rowdyResults.print()
})