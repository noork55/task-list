import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";

import { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
  return (
    <Card sx={{ mb: 2, backgroundColor: "#f0fff0" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {task.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {task.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            onClick={onDelete}
          >
            Delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default TaskItem;
