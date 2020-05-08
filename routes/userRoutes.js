const express =require("express");
const router = express.Router();
const path = require("path");
const server = express();
const User = require("../models/registerModel");
const Customer =require("../models/customerModel");
const Sales = require("../models/salesModel")
const passport =require("passport");


// Routes for sales executive log in

router.get("/adminhome",(req,res)=>{
    res.render("adminhome",{name:req.query.user});
})

// Get route to display sales registration form

router.get("/salesReg",async(req,res)=>{
    if(req.session.user){
        try{
            res.render("salesReg");
        }catch{
            res.status(500).send("Unable to display salesReg form")
        }
    }else{
        res.redirect("/");
    }
})



// Routes to save the sales into the database

router.post("/salesList",async(req,res)=>{
    try{
        let sales = await new Sales(req.body);
        // console.log(sales)
        sales.save();
        res.redirect("/user/salesReg");
    }catch(err){
        res.status(404).send("Failed to save sales to the database")

    }

}); 


// routes to display the sales executive list
router.get("/salesList", async (req, res) => {
	if (req.session.user) {
		//finds all the items in the db
		try {
			let sales = await Sales.find();
			//console.log(Staff);

			if (req.query.name) {
				sales = await Sales.find({ name: req.query.name });
			}
			res.render("salesList", { saless: sales   });
		} catch (error) {
			res.status(400).send("Unable to find items in the database");
		}
	} else {
		res.redirect("/user/salesReg");
	}
	//res.render("salesList");
});




// routes to register the customers
router.get("/saleshome",(req,res)=>{
    res.render("saleshome",{name:req.query.user});
})

// Get route to display sales registration form

router.get("/CustomerReg",async(req,res)=>{
    if(req.session.user){
        try{
            res.render("CustomerReg");
        }catch{
            res.status(500).send("Unable to display customerReg form")
        }
    }else{
        res.redirect("/");
    }
})



// Routes to save the sales into the database

router.post("/CustomerList",async(req,res)=>{
    try{
        let customer = await new Customer(req.body);
        // console.log(sales)
        customer.save();
        res.redirect("/user/CustomerReg");
    }catch(err){
        res.status(404).send("Failed to save sales to the database")

    }

}); 


// routes to display the more customers
router.get("/CustomerList", async (req, res) => {
	if (req.session.user) {
		//finds all the items in the db
		try {
			let customer = await Customer.find();
			//console.log(Customer);

			if (req.query.name) {
				customer = await Customer.find({ name: req.query.name });
			}
			res.render("CustomerList", { customers: customer });

			// A pug file that file that will display and users is a varriable name that parses overs other items in the database.
		} catch (error) {
			res.status(400).send("Unable to find items in the database");
		}
	} else {
		res.redirect("/user/CustomerReg");
	}
	
});









module.exports=router

