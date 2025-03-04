import { Router } from "express";

const authRouter = Router();

authRouter.post("/register", (req, res) => {
  res.json({ title: "Register" });
});

authRouter.post("/login", (req, res) => {
  res.json({ title: "Login" });
});

authRouter.post("/logout", (req, res) => {
  res.json({ title: "Logout" });
});

export default authRouter;
