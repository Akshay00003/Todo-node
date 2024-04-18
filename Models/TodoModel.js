const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    task: { type: String, required: true },
    done: { type: Boolean, default: false },
  },
  { timestamps: true }
);
const Task = mongoose.model("tasks", TaskSchema);
module.exports = Task;
