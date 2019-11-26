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



let myjason = `[
    {
      "id": "1",
      "employee_name": "Scott",
      "employee_salary": "12322",
      "employee_age": "23",
      "profile_image": ""
    },
    {
      "id": "6",
      "employee_name": "[S]Miko",
      "employee_salary": "2435",
      "employee_age": "33",
      "profile_image": ""
    },
    {
      "id": "7",
      "employee_name": "Jonn Wick 3",
      "employee_salary": "6000",
      "employee_age": "31",
      "profile_image": ""
    },
    {
      "id": "10",
      "employee_name": "[S]Momo",
      "employee_salary": "3525",
      "employee_age": "33",
      "profile_image": ""
    }
]`

let data2 = JSON.parse(myjason) 




let input = 6
console.log(data2)
let blabla
let restult; 
data2.forEach(function (user) {
    if(user.id == input) {
        restult = user
    }
}) //?
restult 
