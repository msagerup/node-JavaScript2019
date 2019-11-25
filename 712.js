// Task 1:

// Do you remember the user API that we made earlier? Let's try to make it. First, run "npm init" in the terminal in your folder. This will take you though a series of question. For now, it's not important what you answer. After the question, you will get a "package.json" file in your folder.

// Install express and body-parser by writing "npm install --save express" and "npm install --save body-parser".

// Task 2:

// Create your routes. Use the documentation for express if you don't remember how to do it (https://expressjs.com/en/guide/routing.html) (Lenker til en ekstern side.)

// (GET) "/user/<user_id>"
// (POST) "/user/"
// (PUT) "user/<user_id>"
// (DELETE) "/user/<user_id>"

// Task 3:

// Create a JSON file with your users. This is now a simple database. Try to strutcture your JSON so it's easy to find a user based on user_id in it. Read the entire JSON, and parse it into an object. Each time the object changes, you should write to your JSON file to keep permanent state. You might want to use a class or functions to write / read the file in a consistent way across your different endpoints. 

const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const cors = require('cors');

app = express();
////
//Middleware
app.use(cors());