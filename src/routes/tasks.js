import express from "express";
import Task from "../models/task.js";

const router = express.Router();

// Create task
router.post("/", async (req, res) => {
  console.log("Incoming body:", req.body);
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get single task
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "Task not found!" });
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: "Invalid ID" });
  }
});

// Update task
router.patch("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) {
      return res.status(404).json({ error: "Task not found!" });
    }
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ error: "Task not found!" });
    }
    res.json({ message: "Task deleted!" });
  } catch (error) {
    res.status(400).json({ error: "Invalid ID" });
  }
});

export default router;
