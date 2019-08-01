const User = require('../models/register.model');

const postUser = (username, password, email, money) => new Promise((resolve, reject) => {
  const newUser = new User({ username, password, email, money });
  newUser.save((err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { postUser };
