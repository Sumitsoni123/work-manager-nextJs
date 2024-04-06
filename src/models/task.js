const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  addedDate: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  userId: {
    type: mongoose.ObjectId,
    require: true,
  },
});

export const Task =
  mongoose.models.tasks || mongoose.model("tasks", TaskSchema);
