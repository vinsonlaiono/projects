const path = require('path');
const User = require('../../controllers/users')
// -----------------------------------
// GET ALL USERS
// -----------------------------------
module.exports = function(app){
    app.get('/api/users', (req, res) => {
        User.getAllUsers(req, res);
    })

    app.post('/api/users', (req, res) => {
        User.createNewUser(req, res);
    })
    
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });

    app.get('/api/github/jobs/all', (req, res) => {
        console.log("in get all jobs api call")
    let jobsApiUrl = 'https://jobs.github.com/positions.json';
      fetch(jobsApiUrl, {  
        mode: 'no-cors',
      }, function(response){
        console.log("in the res: ", res)
      })
    //   .then(response => res.json({"message":"thi is"}))
    //   .then(contents => res.json("COntentes:",contents))
    //   .catch(() => console.log("Can’t access " + jobsApiUrl + " response. Blocked by browser?"))
    })
};