const User = require('../models/register.model');

const searchUsernameAndPassword = (usernamep, passwordp) => new Promise((resolve, reject) => {
  User.findOne({ username: usernamep , password: passwordp },(err, data) => {
    if (err) {
      reject(err);
    } else if (data === null) {
      reject(new Error('Username or password is incorrect.'));
    } else {
      resolve(data);
    }
  });
});

module.exports = { searchUsernameAndPassword };
