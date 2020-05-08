const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

var registerSchema = new mongoose.Schema({
    firstName: String,
    email:String,
	role: String
});

registerSchema.plugin(passportLocalMongoose, { usernameField: "firstname" });
module.exports = mongoose.model("User", registerSchema);
