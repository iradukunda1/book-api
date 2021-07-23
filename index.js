const express = require("express");
const albumList = require("./api/routes");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", albumList);

app.get("/", (req, res) => {
  res.send("Welcome to the albums api end points please use /api/v1/albums/:id");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening...");
});
