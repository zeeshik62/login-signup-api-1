const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
require("./Models/db");
const AuthRouter = require("./Routes/AuthRouter");

const PORT = process.env.PORT || 4000;

app.get("/ping", (req, res) => {
  res.end("PONG");
});

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", AuthRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
