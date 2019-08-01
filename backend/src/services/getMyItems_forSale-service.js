const User = require('../models/register.model')

const getWhosItems = token => new Promise((resolve, reject) => {
  User.find({ refreshToken: token }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      const result = data[0].username;
      resolve(result);
    }
  });
});

module.exports = { getWhosItems };

