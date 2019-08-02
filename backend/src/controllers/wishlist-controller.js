
const { findUserByToken } = require('../services/findUserByToken-service');
const { findUsersHighestBids } = require('../services/findUsersHighestBids-service');


const wishlist = (req, res) => {
  const rt = req.headers["authorization"].slice(7);
  findUserByToken(rt)
    .then(result => findUsersHighestBids(result))
    .then(data => { res.status(200).json(data) })
    .catch((err) => {
      if (err) {
        res.status(400).json({ status: 'error', message: err.message });
      }
    });
};

module.exports = { wishlist };