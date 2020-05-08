const mongoose = require("mongoose");

var salesSchema= new mongoose.Schema({
    name:String,
    Date:String,
    nationality:String,
    email:String,
    vehicle:String,
    contact:String,
    wkds:String,
    dob:String,
    wkid:String,
    role:String
})

module.exports=mongoose.model("Sales",salesSchema);