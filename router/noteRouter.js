const { Router } = require("express");
const { createNote, getNotes, deleteNote,editNote} = require("../controller/noteController");

const noteRouter = Router();
noteRouter.post("/createNote", createNote);
noteRouter.get("/getNotes", getNotes)
noteRouter.delete("/deleteNote/:_id", deleteNote)
noteRouter.post("/editNote/:_id", editNote)

module.exports = noteRouter;
