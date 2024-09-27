import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json());
app.use("/tasks", taskRoutes);

// Add a root route
app.get("/", (req, res) => {
  res.send("Task List API");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
