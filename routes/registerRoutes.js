const express = require("express");
const router = express.Router();
const path = require("path");
const User = require("../models/registerModel")


const permisions = require("../permissions");
const passport = require("passport");

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views","index.html"));
});

router.post("/", async (req, res) => {
	try {
		//instance of the model myData & save to return the content in the body
		var user = new User(req.body);
		//console.log(req.body);
		//after this is done the save returns a promise
		//to save you require User from the model
		await User.register(user, req.body.password, (err) => {
			if (err) {
				throw err;
			}
			res.redirect("/");
		});
	} catch (error) {
		res.status(400).send("unable to save to database");
	}
});







module.exports=router;