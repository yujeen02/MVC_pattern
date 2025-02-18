const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

// 유저 전부 가져오기를 하는 라우터
router.get("/", userController.getUser);

// 해당하는 유저 가져오기를 하는 라우터
router.get("/detail/:id", userController.getUserById);

router.get("/mostYoung", userController.getYoungUser);

router.get("/mostOld", userController.getOlderUser);

router.get("/thirty", userController.getUserpeopleTh);

module.exports = router;
