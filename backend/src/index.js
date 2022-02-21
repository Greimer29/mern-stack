require('dotenv').config();

const app = require('./app');
const cors = require('cors')
    // require('./database');

//middlewares
app.use(cors());

//Routes
app.get('/api/users', (req, res) => res.send('Users Routes'));
app.get('/api/notes', (req, res) => res.send('Notes Routes'));

//settings
app.set('port', process.env.PORT || 8080)

//Initializing the server
async function Main() {
    await app.listen(app.get('port'));
    console.log(`server on port ${app.get('port')}`);
}

Main();