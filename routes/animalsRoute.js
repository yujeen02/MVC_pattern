const express = require("express");
const router = express.Router();
const animalController = require("../controller/animalsController");

router.get("/", animalController.getAnimals);
router.get("/detail/:id", animalController.getAnimalsById);
router.get("/dogAnimal", animalController.getDog);
router.get("/leeByName", animalController.getLeeAnimal);
router.get("/youngAnimal", animalController.getYoungAnimal);

module.exports = router;
