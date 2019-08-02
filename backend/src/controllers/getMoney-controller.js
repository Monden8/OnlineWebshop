const { findUserByToken } = require('../services/findUserByToken-service');
const { getMoneyByUsername } = require('../services/getMoney-service');


const getMoney = (req, res) => {
  const { rt } = req.body;

  findUserByToken(rt)
    .then((result) => getMoneyByUsername(result))
    .then(() => { res.status(200).json({ message: 'ok'}) })
    .catch((err) => {
      if (err) {
        res.status(400).json({ status: 'error', message: err.message });
      }
    });
};

module.exports = { getMoney };