const { findUserByToken } = require('../services/findUserByToken-service');
const { eraseRefreshToken } = require('../services/eraseRefreshToken');

const userLogout = (req, res) => {
  const { rt } = req.body;

  findUserByToken(rt)
    .then(result => eraseRefreshToken(result))
    .then(() => { res.status(200).send('ok') })
    .catch((err) => { res.status(400).json(err.message) });
};

module.exports = {
  userLogout,
};
