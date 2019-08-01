const { getWhosItems } = require('../services/getMyItems_forSale-service');
const { getUsersItems } = require('../services/getUsersItems-service');


const getMySelling = (req, res) => {
  const token = req.headers['authorization'].slice(7);
  getWhosItems(token)
    .then(result => getUsersItems(result))
    .then(data => { res.status(200).json(data) })
    .catch((err) => { res.status(400).json(err.message) });
};

module.exports = {
  getMySelling,
};
