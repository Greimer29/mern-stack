require('dotenv').config();

const app = require('./app');

//Initializing the server
async function Main() {
    await app.listen(app.get('port'));
    console.log(`server on port ${app.get('port')}`);
}

Main();