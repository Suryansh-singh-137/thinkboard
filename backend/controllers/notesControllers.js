import NotesModel from "../models/notesModel.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await NotesModel.find();
    res.status(200).json({
      message: "All notes fetched successfully",
      notes,
    });
  } catch (error) {
    console.log("Unable to fetch notes", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET A SINGLE NOTE
export const getNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await NotesModel.findById(id);

    if (!note) return res.status(404).json({ message: "Note not found" });

    res.status(200).json({ message: "Note fetched successfully", note });
  } catch (error) {
    console.log("Unable to fetch note", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// CREATE A NOTE
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = new NotesModel({ title, content });
    await note.save();

    res.status(201).json({
      message: "Note created successfully",
      note,
    });
  } catch (error) {
    console.log("Unable to create note", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE A NOTE
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params; // <-- HERE

    const deleted = await NotesModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note deleted successfully",
      deleted,
    });
  } catch (error) {
    console.log("Unable to delete note", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// UPDATE A NOTE
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updated = await NotesModel.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note updated successfully",
      updated,
    });
  } catch (error) {
    console.log("Unable to update note", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
