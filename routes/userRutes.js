// const userRutes = (app, fs) => {
//     const dataSetPath = './routes/users.json';

//     // Get all users

//     app.get('/users/:id', (req, res) => {
//         fs.readFile(dataSetPath, (err, data) => {
//             if (err) {
//                 throw new Error('Could not find file');
//             }
//             res.send(JSON.parse(data)[req.params.id]);
//         });
//     });
// };

// module.exports = userRutes;


const data = require('./users.json')




console.log(data[0])