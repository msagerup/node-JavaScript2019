const userRutes = (app, fs) => {
    const dataSetPath = './routes/users.json';

    // Get all users

    app.get('/users/:id', (req, res) => {
        fs.readFile(dataSetPath, (err, data) => {
            if (err) {
                throw new Error('Could not find file');
            }

            let userInput = req.params.id;
            // Store userid
            let sendUser
            // Parse data
            let data2 = JSON.parse(data) 
            // Search data obj return user
            data2.forEach(function (user) {
                if(user.id == userInput) {
                    sendUser = user
                }
            })
            console.log(sendUser)

            res.send(sendUser);
        });
    });
};

module.exports = userRutes;


