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
const deleteTransaction = async (req, res)=>{
  const id = req.params._id;
  console.log(id)

  try{
    const delTransaction = await transactionModel.findByIdAndDelete(id)
    res.status(200).send(delTransaction)
    if(!delTransaction){
      console.log("id not found")
    }
  }catch(err){
    res.status(500).send(err)
  }
}

module.exports = {createTransaction, getTransactions,deleteTransaction}