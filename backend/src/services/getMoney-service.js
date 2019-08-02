const User = require('../models/register.model');

const getMoneyByUsername = nameAndId => new Promise((resolve, reject) => {
  User.find({ username: nameAndId.username },(err, data) => {
    if (err) {
      reject(err);
    } else {
      const result = {username: data[0].username, money: data[0].money}
      resolve(result);
    }
  });
});


module.exports = {
  getMoneyByUsername,
};