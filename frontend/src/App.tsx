import React from "react";
import { Container, Typography, Box } from "@mui/material";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{ backgroundColor: "#f0f0f0", borderRadius: 2, p: 2 }}
    >
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "bold",
            color: "#333",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          Task List
        </Typography>
        <TaskList />
      </Box>
    </Container>
  );
};

export default App;
