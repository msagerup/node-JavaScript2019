// Create your routes. Use the documentation for express if you don't remember how to do it (https://expressjs.com/en/guide/routing.html) (Lenker til en ekstern side.)

// (GET) "/user/<user_id>"
// (POST) "/user/"
// (PUT) "user/<user_id>"
// (DELETE) "/user/<user_id>"

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//////////
// JSON data

const app = express();

//////////
// FS

const fs = require('fs');

////////
// Middleware

app.use(bodyParser.json());
app.use((req,res,next) => {
    console.log('Recieved new request')
    next()
})

///////
// Rutes

const rutes = require('./routes/rutes')(app, fs);

const port = 3002;

app.listen(port, () => {
    console.log(`Server listening to port: ${port}`);
});
