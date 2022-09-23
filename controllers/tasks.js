const Task = require('../models/Task');

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({ tasks });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    return res.status(201).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }

    return res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const updateTask = (req, res) => {
  return res.send('update task');
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }

    return res.status(200).json({ task });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask };
