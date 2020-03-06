// Inside the burgers_controller.js file, import the following:

// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.


const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/burgers", (req, res) => {
    burger.all(function(data) {

       
      console.log("inside controller",data);
      res.render("index",{burgers: data});
    });
  });












module.exports=router;