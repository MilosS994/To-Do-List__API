import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";

import { PORT } from "./config/env.js";

import userRouter from "./routes/user.routes.js";
import todosRouter from "./routes/todos.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/todos", todosRouter);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  await connectDB();
});
