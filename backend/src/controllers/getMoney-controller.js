const { getMoneyByUsername } = require("../services/getMoney-service");
const { getWhosItems } = require("../services/getMyItems_forSale-service");

const getMoney = (req, res) => {
  const rt = req.headers["authorization"].slice(7);
  getWhosItems(rt)
    .then(result => getMoneyByUsername(result))
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      if (err) {
        res.status(400).json({ status: "error", message: err.message });
      }
    });
};

module.exports = { getMoney };
