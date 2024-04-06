const { mongoose, Schema, model } = require("mongoose");

const transactionSchema = new Schema({
    userId: { type: String, required: true },
    category: {
        type: String,
        enum: ["food", "shopping", "bills", "clothing","wage"]
    },
    transactionTitle: String,
    amount: { type: Number, required: true },
    createdAt: String,
    note: String,
    transactionType: {
        type: String,
        enum: ["income", "expense"], 
    },
});

const transactionModel = model("transaction", transactionSchema);
module.exports = transactionModel;
