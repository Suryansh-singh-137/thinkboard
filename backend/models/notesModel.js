import mongoose from "mongoose";
const NotesSchema = new mongoose.Schema(
  {
    title: {
      type: String,

      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const NotesModel = mongoose.model("Note", NotesSchema);
export default NotesModel;
