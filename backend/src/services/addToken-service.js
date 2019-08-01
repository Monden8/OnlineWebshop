const jwt = require('jsonwebtoken');
const key = process.env.key

const addToken = datas => {
  let refreshToken = jwt.sign({ id: datas._id, username: datas.username }, key, { expiresIn: '30d' });
  let token = jwt.sign({ id: datas._id, username: datas.username }, key, { expiresIn: '1hr' });
  let resData = { rt: refreshToken, t: token, datas };
  return resData;
}

module.exports = { addToken };
