const itemInfo = require("../models/itemsModels");

const getAllItem = (req, res) => {
  const items = itemInfo.allData();
  res.render("items/index", { items });
};

const getItemsById = (req, res) => {
  const itemsbyid = itemInfo.itemById(req.params.id);
  res.render("items/id", { itemsbyid });
};

const getexpensiveItem = (req, res) => {
  const itemEx = itemInfo.expensiveItem();
  res.render("items/expenItem", { itemEx });
};

const gajenCate = (req, res) => {
  const gajenItem = itemInfo.gajenCa();
  res.render("items/category", { gajenItem });
};

const getUserpeopleTh = (req, res) => {
  const highstockitem = itemInfo.highStock();
  res.render("items/highStock", { highstockitem });
};

module.exports = {
  getAllItem,
  getItemsById,
  getexpensiveItem,
  gajenCate,
  getUserpeopleTh,
};
