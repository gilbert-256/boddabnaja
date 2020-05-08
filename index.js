const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");
const userRoutes =require("./routes/userRoutes");


const session = require("express-session");
const passport = require("passport");

const User = require("./models/registerModel");
const Sales = require("./models/salesModel");
const Customer =require("./models/customerModel")




const server = express();

server.set("view engine","pug");

server.use(express.static("public"));
server.use("/static",express.static("public"));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));

server.use(passport.initialize())

mongoose.connect(
    "mongodb://localhost:27017/boddaBoda",
    { useNewUrlParser:true,useUnifiedTopology:true},
    function (err){
        if (err)  throw err;
        console.log("Connected Sucessfully");
    }
);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


server.use(
    session({
        secret:"thesecret",
        resave:true,
        saveUninitialized:false,
    })
)

server.use("/register",registerRoutes);
server.use("/",loginRoutes);
server.use("/user",userRoutes); 

server.listen(3000,function(){
    console.log("Listening at port 3000")

})
 