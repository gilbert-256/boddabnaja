const mongoose = require("mongoose")

var customerSchema = new mongoose.Schema({
    name:String,
    Date:String,
    phone:String,
    nan:String,
    nin:String,
    dob:String,
    vehicle:String,
    refname:String,
    refnum:String,
    refwork:String,
    refdob:String,
    pay2:String,
    maonthpay:String,
    stage:String,
    other:String,
    status:String
    

})

module.exports=mongoose.model("Customer",customerSchema)