const userRutes = (app, fs) => {
    const dataSetPath = './routes/users.json';

    // Get all users

    app.get('/users/:id', (req, res) => {
        fs.readFile(dataSetPath, (err, data) => {
            // Catch if there was an error with getting
            if (err) {
                throw new Error('Could not find file');
            }
            // Get params user entered.
            let userInput = req.params.id;
            // Parse data
            let dataObj = JSON.parse(data);

            // Check if there is something in the Array.
            if (dataObj.length === 0) {
                res.send({
                    error: 'There are no users'
                });
            }
        
            // Used to store value of forEach search
            let sendUser;
            // Search data obj for user,  return user
            dataObj.forEach(function(user) {
                if (user.id == userInput) {
                    sendUser = user;
                } else {
                    sendUser = {
                        error: `No user with user id: ${userInput}`
                    }
                }
            });
            // Return user
            res.send(sendUser);
        });
    });
};

module.exports = userRutes;
