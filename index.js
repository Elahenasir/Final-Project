const SERVER_PORT = process.env.PORT || 8080;

const resetDataBase = require('./utils/db-tools');
resetDataBase();

const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const apiRouter = require("./api");
const http=require('http')
const app = express();
const router = express.Router();
var cors = require('cors')


app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, "QSolutionClient/build")));
app.use("/api", apiRouter);
app.use(cors());
app.get("/", function(req, res, next) {
  res.render("home");
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/QSolutionClient/build/index.html"));
 });

app.listen(SERVER_PORT, () => {
  console.info(`Server started at http://localhost:${SERVER_PORT}`);
});
