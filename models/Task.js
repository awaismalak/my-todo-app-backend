const mongoose = require("mongoose");
const tasksSchema = mongoose.Schema({
  taskTitle: { type: String, required: true },
  timing: { type: String, required: true },
  isCompleted: { type: Boolean, required: true },
});

module.exports = mongoose.model("Tasks", tasksSchema);
