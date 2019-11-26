const postUser = (app, fs) => {
    const dataSetPath = './routes/users.json';
    //get current file
    const currentData = JSON.parse(fs.readFileSync(dataSetPath, 'utf8'));

    app.post('/post', (req, res) => {
        //get new info from user
        let infoFromUser = req.body;
        currentData.push(infoFromUser);
        // Try to save info to file
        try {
            fs.writeFileSync(dataSetPath, JSON.stringify(currentData));
            res.status(201).send('Got the info! Thanks!');
        } catch (err) {
            res.status(500).send('Something went wrong with saving');
        }

        // fs.writeFile(dataSetPath, (err,data) => {
        //     // Catch error
        //     if (err) {
        //         throw new Error('Erro writing data')
        //     }
        //     // Get params user eneterd.

        // })
    });
};

module.exports = postUser;
