const express = require("express");
const router = express.Router();
const itemController = require("../controller/itemsController");

// 유저 전부 가져오기를 하는 라우터
router.get("/", itemController.getAllItem);

// 해당하는 유저 가져오기를 하는 라우터
router.get("/detail/:id", itemController.getItemsById);

router.get("/expenItem", itemController.getexpensiveItem);

router.get("/category", itemController.gajenCate);

router.get("/highStock", itemController.getUserpeopleTh);

module.exports = router;
