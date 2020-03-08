const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

  router.get("/burgers", (req, res) => {
    burger.all(function(data) {       
      // console.log("inside controller",data);
      res.render("index",{burgers: data});
    });
  });

  router.post("/burgers/create", (req, res) => {
      let input=(req.body.burgerinput); //burgerInput is the name of the input form inside the index handlebars
      if(input != ''){
        burger.putOne(input,function(data) {           
        // console.log("req.body inside controller",input);        
        res.redirect("/burgers");
        });

      }else{
        res.redirect("/burgers");
      }    
  });

  router.put("/burgers/devoured/:id",(req,res)=>{
    let id =req.params.id;
    burger.update(id,function(data){      
              
    });
    res.redirect("/burgers");

  });

  router.get("*", (req, res) => {
    burger.all(function(data) {       
      res.render("index",{burgers: data});
    });
  });

module.exports=router;