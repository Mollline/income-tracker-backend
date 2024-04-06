const noteModel = require("../models/noteModel");
const createNote = async (req, res) => {
  const body = req.body;
  try {
    const trans = await noteModel.create(body);
    res.status(200).send(trans);
  } catch (err) {
    res.status(500).send(err);
  }
};
const getNotes = async (req, res) => {
  try {
    const notes = await noteModel.find({});
    console.log(notes);
    res.status(200).send(notes);
  } catch (err) {
    res.status(500).send(err);
  }
};
const deleteNote = async (req, res) => {
  const id = req.params._id;
  try {
    const delnote = await noteModel.findByIdAndDelete(id);
    if (!delnote) {
      return res.status(404).send("note not found");
    }
    res.status(200).send("note deleted");
  } catch (err) {
    console.error("Error deleting note:", err);
    res.status(500).send("Internal Server Error");
  }
};
const editNote = async (req, res) => {
  const id = req.params._id;
  const body = req.body;
  try {
    const edit = await noteModel.findByIdAndUpdate(id, {
      noteTitle: body.noteTitle,
      createdAt: body.createdAt,
      note: body.note,
    });
    if (edit) {
      return res.status(200).send(edit);
    } else {
      return res.status(404).send("note not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createNote,
  getNotes,
  deleteNote,
  editNote,
};
