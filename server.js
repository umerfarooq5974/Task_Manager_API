import express from "express";
import dotenv from "dotenv";
import "./src/db/mongoose.js"
import taskRoutes from "./src/routes/tasks.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
// connectDB();

// Routes
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
