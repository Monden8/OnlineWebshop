const express = require('express');

const { userRegister } = require('../controllers/register-controller');
const { userLogin } = require('../controllers/login-controller');
const { userLogout } = require('../controllers/logout-controller');
const { addItem } = require('../controllers/additem-controller');
const { getItems } = require('../controllers/getitems-controller');


const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);
router.post('/logout', userLogout);
router.post('/additem', addItem);
router.get('/main', getItems);


module.exports = router;
