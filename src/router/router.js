const express = require('express');
const router = express.Router();

const postHandler = require("../handler/postHandler")
const getUser = require("../handler/getUser")
const userController = require("../controller/userController");
const menuController = require("../controller/menuController");
const orderController = require("../controller/orderController");

router.get('/getAll', postHandler.getAllPost);
router.post('/add/user', userController.addUser);

router.get('/get/menu', menuController.getMenu);
router.post('/add/menu', menuController.addMenu);
router.post('/edit/menu', menuController.editMenu);
router.post('/delete/menu', menuController.deleteMenu);

router.get('/get/order', orderController.getOrder);
router.post('/order/create', orderController.addOrder);
module.exports = router;