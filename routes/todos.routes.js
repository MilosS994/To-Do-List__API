import { Router } from "express";

const todosRouter = Router();

todosRouter.get("/", (req, res) => {
  res.json({ title: "GET all todos" });
});

todosRouter.get("/:id", (req, res) => {
  res.json({ title: "GET todo by id" });
});

todosRouter.post("/", (req, res) => {
  res.json({ title: "CREATE new todo" });
});

todosRouter.put("/:id", (req, res) => {
  res.json({ title: "UPDATE todo" });
});

todosRouter.delete("/:id", (req, res) => {
  res.json({ title: "DELETE todo" });
});

export default todosRouter;
