const userModel = require('../database/Schema/userSchema')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
  const body = req.body;

  const password = body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const data = { ...body, password: hashedPassword };
  try {
    const user = await userModel.create(data);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

const loginuser = async (req, res)=>{
  const body = req.body
  const user = await userModel.findOne({email:body.email})
  if(user){
    res.status(200).send(user)
  } else{
    res.status(404).send('user not found')
  }

}
module.exports = {createUser, loginuser}