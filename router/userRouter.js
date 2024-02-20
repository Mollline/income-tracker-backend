const { Router } = require("express");
const bcrypt = require("bcrypt");
const { createUser, loginuser } = require("../controller/userController");
const userModel = require("../database/Schema/userSchema");

const userRouter = Router();
const validateEmailAddress = async (req, res, next) => {
  const body = req.body;
  const user = await userModel.findOne({ email: body.email });
  if (user) {
    res.status(403).send("email has already taken");
  } else {
    next();
  }
};
const validatePassword = async (req, res, next) => {
  const body = req.body;
  const user = await userModel.findOne({ email: body.email });
  // const signup = user.password + user.email;
  // console.log(user.password, user.email);
  if (user) {
    const isPasswordCorrect = bcrypt.compareSync(body.password, user.password);
    if (isPasswordCorrect) {
      next();
    } else {
      console.log(isPasswordCorrect);
      res.status(404).send("incorrect password");
    }
  } else {
    res.status(404).send("user not found");
  }
};

userRouter.post("/login", validatePassword, loginuser);
userRouter.post("/signup", validateEmailAddress, createUser);

module.exports = userRouter;
