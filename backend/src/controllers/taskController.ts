import { Request, Response } from "express";
import { Task } from "../models/task";

let tasks: Task[] = [];

export const getTasks = (req: Request, res: Response) => {
  res.json(tasks);
};

export const getTaskById = (req: Request, res: Response) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).send("Task not found");
  }
};

export const createTask = (req: Request, res: Response): void => {
  const { title, description } = req.body;
  if (!title) {
    res.status(400).send("Title is required");
    return;
  }
  const newTask: Task = { id: Date.now().toString(), title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

export const updateTask = (req: Request, res: Response) => {
  const { title, description } = req.body;
  const task = tasks.find((t) => t.id === req.params.id);
  if (task) {
    task.title = title || task.title;
    task.description = description || task.description;
    res.json(task);
  } else {
    res.status(404).send("Task not found");
  }
};

export const deleteTask = (req: Request, res: Response) => {
  tasks = tasks.filter((t) => t.id !== req.params.id);
  res.status(204).send();
};
