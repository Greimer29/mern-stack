require('dotenv').config();

const app = require('./app');
require('./database');

//Initializing the serveras
async function Main() {
    await app.listen(8080);
    console.log('Server on port: 8080');
}

Main();