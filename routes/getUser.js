const getUser = (app,fs) => {

    const dataSetPath = './routes/users.json';
    app.get('/user', (req,res) => {
        fs.readFile(dataSetPath, (err, data) => {
            if (err) {
                throw new Error('Could not find file');
            }
            res.send(JSON.parse(data));
        });
    })
}

module.exports = getUser;