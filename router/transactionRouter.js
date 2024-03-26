const { Router } = require("express");
const { createTransaction, getTransactions, deleteTransaction, editTransaction} = require("../controller/transactionController");

const transactionRouter = Router();
transactionRouter.post("/createTransaction", createTransaction);
transactionRouter.get("/getTransactions", getTransactions)
transactionRouter.delete("/deleteTransaction/:_id", deleteTransaction)
transactionRouter.post("/editTransaction/:_id", editTransaction)

module.exports = transactionRouter;
