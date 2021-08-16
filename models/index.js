const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/nailsdb'

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}`);
})

mongoose.connection.on("error", (err) => {
  console.log("Could not connect to MongoDB!", err);
})

module.exports = {
    Nails: require('./Nails.js'),
    User: require('./User.js')
}
