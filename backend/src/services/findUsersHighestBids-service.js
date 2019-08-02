const Items = require("../models/items.model");

const findUsersHighestBids = result =>
  new Promise((resolve, reject) => {
    Items.find({ highestBidder: result.username }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        console.log(data);
        resolve(data);
      }
    });
  });

module.exports = {
  findUsersHighestBids
};
