const { Router } = require("express");
const { createTransaction, getTransactions } = require("../controller/transactionController");

const transactionRouter = Router();
transactionRouter.post("/createTransaction", createTransaction);
transactionRouter.get("/getTransactions", getTransactions)
transactionRouter.delete("/deleteTransaction/_id", getTransactions)

module.exports = transactionRouter;
