const carInfo = require("../models/carsModels");

const getCars = (req, res) => {
  const cars = carInfo.allData();
  res.render("cars/index", { cars });
};

const getCarsById = (req, res) => {
  const carsbyid = carInfo.carById(req.params.id);
  res.render("cars/id", { carsbyid });
};

const getexpensivecar = (req, res) => {
  const expensivecar = carInfo.expensivecar();
  res.render("cars/expensivecar", { expensivecar });
};

const getgroupByFuel = (req, res) => {
  const groupByFuel = carInfo.groupByFuel();
  res.render("cars/groupByFuel", { groupByFuel });
};

const gethyundaiCar = (req, res) => {
  const hyundaiCar = carInfo.hyundaiCar();
  res.render("cars/hyundaiCar", { hyundaiCar });
};

module.exports = {
  getCars,
  getCarsById,
  getexpensivecar,
  getgroupByFuel,
  gethyundaiCar,
};
