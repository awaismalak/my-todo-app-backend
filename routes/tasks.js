const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
// get all tasks from db
router.get("/", async (req, res) => {
  try {
    const allTasks = await Task.find();
    res.json(allTasks);
  } catch (err) {
    res.json({ message: err });
  }
});
// add task on db
router.post("/", async (req, res) => {
  const task = new Task({
    taskTitle: req.body.taskTitle,
    timing: req.body.timing,
    isCompleted: req.body.isCompleted,
  });
  try {
    const addTask = await task.save();
    res.json(addTask);
  } catch (err) {
    res.json({ message: err });
  }
});
// delete task from db
router.delete("/:taskId", async (req, res) => {
  try {
    const deleteTask = await Task.remove({ _id: req.params.taskId });
    res.json(deleteTask);
  } catch (err) {
    res.json({ messsage: err });
  }
});

// task edit on db
router.patch("/:taskId", async (req, res) => {
  try {
    const editTask = await Task.updateOne(
      { _id: req.params.taskId },
      { $set: { taskTitle: req.body.taskTitle } }
    );
    res.json(editTask);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
