const animalInfo = require("../models/animalsModels");

const getAnimals = (req, res) => {
  const animals = animalInfo.allData();
  res.render("animals/index", { animals });
};

const getAnimalsById = (req, res) => {
  const animalsById = animalInfo.animalsById(req.params.id);
  res.render("animals/id", { animalsById });
};

const getDog = (req, res) => {
  const doganimal = animalInfo.dogAnimal();
  res.render("animals/dogAnimal", { doganimal });
};

const getLeeAnimal = (req, res) => {
  const animalLee = animalInfo.leeByName();
  res.render("animals/leeByName", { animalLee });
};

const getYoungAnimal = (req, res) => {
  const youngAnimal = animalInfo.youngAnimal();
  res.render("animals/youngAnimal", { youngAnimal });
};

module.exports = {
  getAnimals,
  getAnimalsById,
  getDog,
  getLeeAnimal,
  getYoungAnimal,
};
