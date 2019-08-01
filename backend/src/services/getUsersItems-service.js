const Items = require('../models/items.model');

const getUsersItems = usernamep => new Promise((resolve, reject) => {
  Items.find({ username: usernamep },(err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });

});


module.exports = {
  getUsersItems,
};