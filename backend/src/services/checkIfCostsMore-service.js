const Items = require("../models/items.model");

const checkIfCostsMore = (resultAndItem, newPrice) =>
  new Promise((resolve, reject) => {
    const currentPrice = resultAndItem.data[0].price;

    if (currentPrice >= newPrice) {
      reject(new Error("The current bid is higher."));
    } else {
      Items.findOneAndUpdate(
        { _id: resultAndItem.data[0]._id },
        { price: newPrice, highestBidder: resultAndItem.result.username },
        err => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        }
      );
    }
  });

module.exports = {
  checkIfCostsMore
};
