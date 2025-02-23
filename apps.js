const express = require("express");
const app = express();
const port = 3000;

const usersRouter = require("./routes/usersRoute");
const itemsRouter = require("./routes/itemsRoute");
const fruitsRouter = require("./routes/fruitsRoute");
const carsRouter = require("./routes/carsRoute");
const animalsRouter = require("./routes/animalsRoute");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter);
app.use("/items", itemsRouter);
app.use("/fruits", fruitsRouter);
app.use("/cars", carsRouter);
app.use("/animals", animalsRouter);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(port + "포트로 대기중 입니다.");
});
