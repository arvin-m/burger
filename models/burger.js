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
            cb(res);

          });

     },
     update:function(id,cb){
        orm.updateOne("burgers",true,id,function(res){
        console.log( " burger id :",id);
        cb(res);

       })
       
      }
    };

module.exports=burger;