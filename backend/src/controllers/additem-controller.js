const { findUserByToken } = require("../services/findUserByToken-service");
const { addnewItem } = require("../services/addItem-service");

const addItem = (req, res) => {
  const { name, price, expiryDate, img, details, usage } = req.body;
  const rt = req.headers["authorization"].slice(7);

  findUserByToken(rt)
    .then(result =>
      addnewItem(name, price, expiryDate, img, details, usage, result)
    )
    .then(() => {
      res.status(200).json({ message: "ok" });
    })
    .catch(err => {
      if (err.errors) {
        res.status(400).json({ status: "error", message: err.message });
      }
    });
};

module.exports = { addItem };
