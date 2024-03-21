const { Router } = require("express");
const { createTransaction, getTransactions, deleteTransaction} = require("../controller/transactionController");

const transactionRouter = Router();
transactionRouter.post("/createTransaction", createTransaction);
transactionRouter.get("/getTransactions", getTransactions)
transactionRouter.delete("/deleteTransaction/:_id", deleteTransaction)

module.exports = transactionRouter;
