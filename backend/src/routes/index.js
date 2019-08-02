const express = require("express");

const { userRegister } = require("../controllers/register-controller");
const { userLogin } = require("../controllers/login-controller");
const { userLogout } = require("../controllers/logout-controller");
const { addItem } = require("../controllers/additem-controller");
const { getItems } = require("../controllers/getitems-controller");
const {
  getMySelling
} = require("../controllers/getMyItems_forSale-controller");
const { buyItem } = require("../controllers/buyitem-controller");
const { getMoney } = require("../controllers/getMoney-controller");
const { wishlist } = require("../controllers/wishlist-controller");

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/logout", userLogout);
router.post("/additem", addItem);
router.get("/main", getItems);
router.get("/myitems", getMySelling);
router.post("/buyitem", buyItem);
router.get("/cashmoney", getMoney);
router.get("/wishlist", wishlist);

module.exports = router;
