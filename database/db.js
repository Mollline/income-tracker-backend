const mongoose = require('mongoose');


const url = "mongodb+srv://Moline:9588@cluster0.tgezrzd.mongodb.net/income-tracker";

const connect = async ()=>{
    res = await mongoose.connect(url)
    if(res) console.log("db connected")
}
module.exports = connect;
