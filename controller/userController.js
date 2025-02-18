const userInfo = require("../models/usersModels");

const getUser = (req, res) => {
  const users = userInfo.allData();
  res.render("users/index", { users });
};

const getUserById = (req, res) => {
  const usersbyid = userInfo.userById(req.params.id);
  res.render("users/id", { usersbyid });
};

const getYoungUser = (req, res) => {
  const youngusers = userInfo.youngerPeople();
  res.render("users/mostYoung", { youngusers });
};

const getOlderUser = (req, res) => {
  const oldusers = userInfo.olderPeople();
  res.render("users/mostOld", { oldusers });
};

const getUserpeopleTh = (req, res) => {
  const users = userInfo.peopleTh();
  res.render("users/thirty", { users });
};

module.exports = {
  getUser,
  getUserById,
  getYoungUser,
  getOlderUser,
  getUserpeopleTh,
};
