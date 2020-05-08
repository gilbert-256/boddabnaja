const express = require("express");
const router = express.Router();
const passport = require("passport");
const permissions =require("../permissions");
const path = require("path");
const server=express();

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views","index.html"));
});

router.post(
	"/",
	passport.authenticate("local", { failureRedirect: "/" }),
	(req, res) => {
		req.session.user = req.user;
		const role = permissions[req.user.role];
		res.redirect(role.homepage + "?userid=" + req.user.id);
	}
);

module.exports=router;