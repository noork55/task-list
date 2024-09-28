import React, { useEffect, useState } from "react";
import { TextField, Button, Box } from "@mui/material";

import { createTask, updateTask } from "../services/api";
import { Task } from "../types/task";

interface TaskFormProps {
  task?: Task;
  onSave: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [task]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      await updateTask(task.id, { title, description });
    } else {
      await createTask({ title, description });
    }
    setTitle(""); // Reset title
    setDescription(""); // Reset description
    onSave();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 2 }}
    >
      <TextField
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
        sx={{
          '& .MuiInputBase-root': {
            backgroundColor: 'white',
          },
          '& .MuiInputLabel-root': {
            backgroundColor: 'white',
            padding: '0 4px',
          },
        }}
      />
      <TextField
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={4}
        fullWidth
        sx={{
          '& .MuiInputBase-root': {
            backgroundColor: 'white',
          },
          '& .MuiInputLabel-root': {
            backgroundColor: 'white',
            padding: '0 4px',
          },
        }}
      />
      <Button type="submit" variant="contained" color="primary">
        Save Task
      </Button>
    </Box>
  );
};

export default TaskForm;
