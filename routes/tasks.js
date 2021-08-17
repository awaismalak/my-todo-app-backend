const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.get("/", (req, res) => {
  res.send("hi this is awais malik from tasks router");
});

router.post("/", async (req, res) => {
  const task = new Task({
    taskTitle: req.body.taskTitle,
    timing: req.body.timing,
  });
  try {
    const addTask = await task.save();
    res.json(addTask);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
