const userRutes = require('./userRutes');
const getUser = require('./getUser');
const postUser = require('./postUser');
const putUser = require('./putUser');

const appRuter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send(`Welcome to the user api:
Use /users to get user info`);
    });
    // defualt 
    userRutes(app, fs);
    // GET
    getUser(app, fs);
    // Post
    postUser(app, fs);
    //
    putUser(app,fs)
};

module.exports = appRuter;
