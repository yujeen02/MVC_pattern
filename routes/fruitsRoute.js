const express = require("express");
const router = express.Router();
const fruitController = require("../controller/fruitsController");

// 유저 전부 가져오기를 하는 라우터
router.get("/", fruitController.getFruit);

// 해당하는 유저 가져오기를 하는 라우터
router.get("/detail/:id", fruitController.getFruitById);

router.get("/redFruit", fruitController.getRedFruit);

router.get("/expenFruit", fruitController.getExpensiveFruit);

router.get("/weightFruit", fruitController.getWeightFruit);

module.exports = router;
