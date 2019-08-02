const { findUserByToken } = require('../services/findUserByToken-service');
const { findItem } = require('../services/findItembyId-service');
const { checkIfCostsMore } = require('../services/checkIfCostsMore-service');


const buyItem = (req, res) => {
  const { _id, price, rt } = req.body;

  findUserByToken(rt)
    .then((result) => findItem(result, _id))
    .then((resultAndItem) => checkIfCostsMore(resultAndItem, price))
    .then(() => { res.status(200).json({ message: 'ok'}) })
    .catch((err) => {
      if (err) {
        res.status(400).json({ status: 'error', message: err.message });
      }
    });
};

module.exports = { buyItem };