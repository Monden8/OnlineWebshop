const Items = require('../models/items.model');

const addnewItem = (name, price, expiryDate, img, details, usage, result) => new Promise((resolve, reject) => {
  const newItem = new Items({ 
    name,
    price,
    expiryDate: Math.floor((Date.now() / 1000) + 2629743000),
    img, 
    details, 
    usage, 
    username: result.username, 
    user_id : result.user_id });
    newItem.save((err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { addnewItem };
