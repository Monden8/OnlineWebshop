const User = require('../models/register.model');

const eraseRefreshToken = data => new Promise((resolve, reject) => {
  User.findOneAndUpdate({ refreshToken: data[0].refreshToken },{ refreshToken: '' }, { upsert: true }, (err, withouttoken) => {
    if (err) {
      reject(err);
    } else {
      resolve(withouttoken);
    }
  });
});



module.exports = {
  eraseRefreshToken,
};