const User = require("../models/register.model");
const salt = process.env.salt;
const sha256 = require("sha256");

const postUser = (username, password, email, money) =>
  new Promise((resolve, reject) => {
    const newpass = sha256(password + salt);
    const newUser = new User({ username, password: newpass, email, money });
    newUser.save((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

module.exports = { postUser };
