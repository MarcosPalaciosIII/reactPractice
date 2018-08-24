const mongoose = require("mongoose");
const Schema   = mongoose.Schema;




const taskSchema = new Schema({
  title: String,
  description: String,
  doneyet: Boolean,
  owner: Schema.Types.ObjectId
});

const Task = mongoose.model("Task", taskSchema);



module.exports = Task;
