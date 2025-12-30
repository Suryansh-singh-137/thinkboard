import express from "express";
const router = express.Router();
import {
  getNotes,
  deleteNote,
  updateNote,
  createNote,
  getNote,
} from "../controllers/notesControllers.js";
router.get("/", getNotes);
router.post("/", createNote);

// RESTful routes for single note operations
router.get("/:id", getNote);
router.delete("/:id", deleteNote);
router.put("/:id", updateNote);
export default router;
