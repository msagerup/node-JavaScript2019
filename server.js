// Create a function that finds the name of the most recent XKCD comic. You need to do a http-request in order to get that name. Do the request towards https://xkcd.com/info.0.json (Lenker til en ekstern side.) using the GET method. Since HTTP requests are async, you need to work with callback. The callback function you send in to your XKCD-get function, should take one parameter (the name of the comic strip), and console.log it.


const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');
app = express();
////
//Middleware
app.use(cors());
// app.use(bodyParser.json());
app.get('/latest', (req, res) => {
    fetch('https://xkcd.com/info.0.json')
        .then(result => result.json())
        .then(data => res.json(data))
        .catch(err => {
            console.log('.... OBS!', error);
            res.sendStatus(500);
        });
});

const port = 3008;

console.log(`Listening to port: ${port}`);
app.listen(port);
