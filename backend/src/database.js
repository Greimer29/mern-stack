const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ?
    process.env.MONGODB_URI :
    'mongodb://localhost/databasetest'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.connection.once('open', () => {
    console.log(`Tha database now is connected`)
})