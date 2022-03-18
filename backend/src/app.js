const express = require('express');
const app = express();
const cors = require('cors')
require('./database');

//middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

//settings
app.set('port', process.env.PORT || 8080)


module.exports = app;