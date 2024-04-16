const moment = require('moment-timezone');

const { mongoose, Schema, model } = require("mongoose");
const noteSchema = new Schema({
    noteTitle: String,
    createdAt: { type: Date, default: moment().tz("Asia/Ulaanbaatar") },
    note: String,
    noteId: String
});

const noteModel = model("notes", noteSchema);
module.exports = noteModel;
