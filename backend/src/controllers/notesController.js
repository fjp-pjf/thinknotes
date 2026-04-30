import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log("error: ", error);
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();

    res.send(200).json({ message: "Note created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log("error: ", error);
  }
}

export function updateNote(req, res) {
  res.status(200).json({ message: "note updated" });
}

export function deleteNote(req, res) {
  res.status(200).json({ message: "note deeleted" });
}
