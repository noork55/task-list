import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../services/api";
import { Task } from "../types/task";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const fetchTasks = async () => {
    try {
      const response = await getTasks();
      console.log(response.data);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      setEditingTask(null);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
  };

  const handleSave = () => {
    setEditingTask(null);
    fetchTasks();
  };

  return (
    <div>
      <TaskForm task={editingTask ?? undefined} onSave={handleSave} />
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={() => handleEdit(task)}
          onDelete={() => handleDelete(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
