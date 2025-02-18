const fruitInfo = require("../models/fruitsModels");

const getFruit = (req, res) => {
  const fruits = fruitInfo.allData();
  res.render("fruits/index", { fruits });
};

const getFruitById = (req, res) => {
  const fruitsbyid = fruitInfo.fruitById(req.params.id);
  res.render("fruits/id", { fruitsbyid });
};

const getRedFruit = (req, res) => {
  const redFruit = fruitInfo.redFruit();
  res.render("fruits/redFruit", { redFruit });
};

const getExpensiveFruit = (req, res) => {
  const expensiveFruit = fruitInfo.expensiveFruit();
  res.render("fruits/expenFruit", { expensiveFruit });
};

const getWeightFruit = (req, res) => {
  const weightFruit = fruitInfo.weightFruit();
  res.render("fruits/weightFruit", { weightFruit });
};

module.exports = {
  getFruit,
  getFruitById,
  getRedFruit,
  getExpensiveFruit,
  getWeightFruit,
};
