const User = require('../models/register.model');
const jwt = require('jsonwebtoken');

const findUserByToken = token => new Promise((resolve, reject) => {
  const valami = jwt.decode(token)

  User.find({ username: valami.username },(err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});


module.exports = {
  findUserByToken,
};