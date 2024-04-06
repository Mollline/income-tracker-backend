const { mongoose, Schema, model } = require("mongoose");

const noteSchema = new Schema({
    noteTitle: String,
    createdAt: String,
    note: String,
});

const noteModel = model("notes", noteSchema);
module.exports = noteModel;
