import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log("error: ", error);
  }
}

export async function getNote(req, res) {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req?.body;
    const note = new Note({ title, content });
    await note.save();

    res.send(200).json({ message: "Note created successfully", note });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log("error: ", error);
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req?.body;

    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
      title,
      content,
    });

    if (!updatedNote) {
      return res.status(404).json({ message: "Note with id not found" });
    }

    res.status(200).json({ message: "Note updated", updatedNote });
  } catch (error) {
    res.status(500).json({ message: "Error in updating the note" });
    console.log("error: ", error);
  }
}

export async function deleteNote(req, res) {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.log("error: ", error);
  }
}
