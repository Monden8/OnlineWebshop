const Items = require("../models/items.model");

const findUsersHighestBids = result =>
  new Promise((resolve, reject) => {
    console.log(result);
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
