const mongoose = require('mongoose');

const URL = "mongodb://0.0.0.0/mernstack";

mongoose.connect(URL, {
    useNewUrlParser: true
})

mongoose.connection.once('open', () => {
    console.log('DB is conected');
})