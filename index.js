const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv/config");
const mongoose = require("mongoose");
const taskRouter = require("./routes/tasks");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// middleware function
app.use("/tasks", taskRouter);

app.get("/", (req, res) => {
  res.send("hello World");
  res.end();
});
const db = process.env.DB_CONNECTION;
mongoose.connect(db, { useNewUrlParser: true }, () =>
  console.log("Db connected successfully")
);
app.listen(PORT, () =>
  console.log("server is running port number " + " " + PORT)
);
