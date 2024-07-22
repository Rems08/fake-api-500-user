const express = require("express");
const router = express.Router();
const userController = require("./../controller/user.controller");


router.post('/:page', userController.getList);

router.get('/:id', userController.getById);

module.exports = router;