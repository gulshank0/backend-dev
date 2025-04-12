import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../db.js";

const router = express.Router();

// Register  a new user endpoint /auth/register
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  //Encypted password by bycrypt
  const hashedPassword = bcrypt.hashSync(password, 8);
  //save the new user and hashed password to the DB

  try {
    const inserUser = db.prepare(`INSERT INTO users(username,password) 
VALUES(?,?) `);
    const result = inserUser.run(username, hashedPassword);

    //now we have the user to add todos for them
    const defaultTodo = `Hello :) Add your first todos`;
    const insertTodos = db.prepare(`INSERT INTO todos(user_id,task)
    VALUES(?, ?)`);

    insertTodos.run(result.lastInsertRowid, defaultTodo);
    //create a token
    const token = jwt.sign(
      { id: result.lastInsertRowid },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );
    res.json({ token });
  } catch (err) {
    console.log(err.messege);
    res.sendStatus(503);
  }
});

router.post("/login", (req, res) => {
  //
  //
  //
  //
  //
  //
  const { username, password } = req.body;
  try {
    const getUser = db.prepare("SELECT *FROM users WHERE username=?");
    const user = getUser.get(username);
    if (!user) {
      return res.status(404).send({ messege: "User not found" });
    }
    const passwordIsValid = bcrypt.compareSync(password, user.password);
  if(!passwordIsValid){return res.status(401).send({messege:"Invalid password"})}

  } catch (err) {
    consol.log(err.messege);
    res.sendStatus(503);
  }
});

export default router;
