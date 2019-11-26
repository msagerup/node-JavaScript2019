const userRutes = require('./userRutes');
const getUser = require('./getUser');

const appRuter = (app, fs) => {
   
    app.get('/', (req,res) => {
        res.send(`Welcome to the user api:
                Use /users to get user info`)
    })

    userRutes(app,fs)
    getUser(app,fs)

};




module.exports = appRuter;