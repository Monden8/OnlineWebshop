const Items = require('../models/items.model');

const findItem = (result, item_id) => new Promise((resolve, reject) => {
  Items.find({ _id: item_id },(err, data) => {
    if (err) {
      reject(err);
    } else {
      const resultAndItem = { data, result }
      resolve(resultAndItem);
    }
  });
});


module.exports = {
  findItem,
};