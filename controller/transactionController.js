const transactionModel = require("../models/transactionModel");

const createTransaction = async (req, res) => {
  const body = req.body;
  try {
    const trans = await transactionModel.create(body);
    res.status(200).send(trans);
  } catch (err) {
    res.status(500).send(err);
  }
};
const getTransactions = async (req, res) => {
  try {
    const transactions = await transactionModel.find({});
    console.log(transactions);
    res.status(200).send(transactions);
  } catch (err) {
    res.status(500).send(err);
  }
};
const deleteTransaction = async (req, res) => {
  const id = req.params._id;
  try {
    const delTransaction = await transactionModel.findByIdAndDelete(id);
    if (!delTransaction) {
      return res.status(404).send("Transaction not found");
    }
    res.status(200).send("transaction deleted");
  } catch (err) {
    console.error("Error deleting transaction:", err);
    res.status(500).send("Internal Server Error");
  }
};
const editTransaction = async (req, res) => {
  const id = req.params._id;
  const body = req.body;
  try {
    const edit = await transactionModel.findByIdAndUpdate(id, {
      category: body.category,
      transactionTitle: body.transactionTitle,
      amount: body.amount,
      createdAt: body.createdAt,
      note: body.note,
      transactionType: body.transactionType,
    });
    if (edit) {
      return res.status(200).send(edit);
    } else {
      return res.status(404).send("Transaction not found");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createTransaction,
  getTransactions,
  deleteTransaction,
  editTransaction,
};

// const body = req.body;
// try {
//   const updatedFact = await Factmodel.findByIdAndUpdate(factId, {
//     title: body.title,
//     text: body.text,
//   });
