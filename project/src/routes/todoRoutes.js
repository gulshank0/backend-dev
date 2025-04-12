import express from "express";
import db from "../db.js";

const router = express.Router();

//Get all todos
router.get("/", (req, res) => {
  const getTodos = db.prepare("SELECT * FROM todos WHERE user_id =?");
  const todos = getTodos.all(req.userID);
  res.json(todos);
});

//Create All todos
router.post("/", (req, res) => {});
// Update All Todos
router.put("/:id", (req, res) => {});

//Delete Todos
router.delete("/:id", (req, res) => {});

export default router;
