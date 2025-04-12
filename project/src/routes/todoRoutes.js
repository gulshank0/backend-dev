import express from "express";
import db from "../db.js";

const router = express.Router();

//Get all todos
router.get("/", (req, res) => {});

//Create All todos
router.post("/", (req, res) => {});
// Update All Todos
router.put("/:id", (req, res) => {});

//Delete Todos
router.delete("/:id", (req, res) => {});

export default router;
