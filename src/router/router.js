const express = require('express');
const router = express.Router();

const postHandler = require("../handler/postHandler")
const getUser = require("../handler/getUser")
const userController = require("../controller/userController");
const menuController = require("../controller/menuController");

router.get('/getAll', postHandler.getAllPost);
router.post('/add/user', userController.addUser);
router.post('/add/menu', menuController.addMenu);

module.exports = router;