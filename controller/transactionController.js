const transactionModel = require('../models/transactionModel');

const createTransaction= async (req, res) => {
  const body = req.body;
  try {
    const trans = await transactionModel.create(body);
    res.status(200).send(trans);
  } catch (err) {
    res.status(500).send(err);
  }
};
const getTransactions = async (req, res)=>{
    try{
        const transactions = await transactionModel.find({});
        console.log(transactions)
        res.status(200).send(transactions)
    }catch(err){
        res.status(500).send(err)
    }
}
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
}


module.exports = {createTransaction, getTransactions,deleteTransaction}