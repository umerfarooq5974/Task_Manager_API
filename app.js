// import express from "express";
// import dotenv from "dotenv";
// import "./db/mongoose.js"
// import taskRoutes from "./models/task.js";

// dotenv.config();
// const app = express();

// app.use(express.json());
// app.use("/tasks", taskRoutes);
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


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
app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
