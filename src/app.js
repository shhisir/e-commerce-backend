const path = require("path");
const uploadDir = path.join(__dirname, "../uploads");
const port = process.env.PORT;
const router = require("./routes/index");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const { haddleError } = require("./utils/handdleError");
const upload = require("./config/multer");
const app = express();
app.use(express.json());

app.get("/",(req, res) => {
  res.send("server is listening");
});

app.use("/uploads", express.static(uploadDir));
app.use(express.json());
app.use("/api/v1", router);

app.use(haddleError);

module.exports = app;
