// Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

const orm=require("../config/orm.js");

let burger={
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
           console.log("inside the burger.js  ",res)
           cb(res);
        });
      },
    putOne: function(value,cb){
          orm.insertOne(value,function(res){
            console.log(" new burger inside the burger",res);
            console.log( "new burger value inside the burger",value);
            cb(res);

          });

     }
    



}







module.exports=burger;
