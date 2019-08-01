const jwt = require('jsonwebtoken');
require('dotenv').config('.env');

const addToken = datas => {
  let refreshToken = jwt.sign({ id: datas._id, username: datas.username }, process.env.key, { expiresIn: '30d' });
  let token = jwt.sign({ id: datas._id, username: datas.username }, process.env.key, { expiresIn: '1hr' });
  let resData = { rt: refreshToken, t: token, datas};
  return resData;
}

module.exports = { addToken };
