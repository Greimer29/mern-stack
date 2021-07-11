require('dotenv').config();

const app = require('./app');
require('./database');

//settings
app.set('port', process.env.PORT || 8080)

//Initializing the server
async function Main() {
    await app.listen(app.get('port'));
    console.log(`server on port ${app.get('port')}`);
}

Main();