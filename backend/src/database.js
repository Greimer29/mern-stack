const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mernstack';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.connection.once('open', () => {
    console.log(`Tha database now is connected`)
})