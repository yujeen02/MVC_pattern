const express = require("express");
const router = express.Router();
const carController = require("../controller/carsController");

router.get("/", carController.getCars);
router.get("/detail/:id", carController.getCarsById);
router.get("/expensivecar", carController.getexpensivecar);
router.get("/groupByFuel", carController.getgroupByFuel);
router.get("/hyundaiCar", carController.gethyundaiCar);

module.exports = router;
