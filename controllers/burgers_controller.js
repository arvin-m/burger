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

  router.post("/burgers/create", (req, res) => {
      let input=(req.body.burgerinput); //burgerInput is the name of the input form inside the index handlebars
      if(input != ''){
        burger.putOne(input,function(data) {
           
        console.log("req.body inside controller",input);
        //   res.render("index",{burgers: data});
        res.redirect("/burgers");
        });

      }else{
        res.redirect("/burgers");

      }
    
  });












module.exports=router;