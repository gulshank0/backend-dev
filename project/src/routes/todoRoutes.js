import express from "express";
import db from "../db.js";

const router = express.Router();

//Get all todos
router.get("/", (req, res) => {
  const getTodos = db.prepare("SELECT * FROM todos WHERE user_id =?");
  const todos = getTodos.all(req.userId);
  res.json(todos);
});

//Create a  todos
router.post("/", (req, res) => {
  const { task } = req.body;
  const insertTodo = db.prepare(
    `INSERT INTO todos(user_id,task) VALUES (?,?) `,
  );
  insertTodo.run(req.userId, task);
  res.json({ id: insertTodo.lastId, task, completed: 0 });
});
// Update a Todos
router.put("/:id", (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;
  const { page } = req.query;
  const updateTodo = db.prepare("UPDATE todos SET completed=? WHERE id=?");
});
updateTodo.run(completed, id);
res.json({ messege: "Todo completed" });
//Delete a Todos
router.delete("/:id", (req, res) => {});

export default router;
