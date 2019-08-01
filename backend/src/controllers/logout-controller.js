const { findUserByToken } = require('../services/findUserByToken-service');
const { eraseRefreshToken } = require('../services/eraseRefreshToken');

const userLogout = (req, res) => {
  const { rt } = req.body;

  findUserByToken(rt)
    .then(data => eraseRefreshToken(data))
    .then(() => { res.status(200).json() })
    .catch((err) => { res.status(400).json(err.message) });
};

module.exports = {
  userLogout,
};
