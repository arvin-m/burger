const orm=require("../config/orm.js");

let burger={
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
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
          cb(res);       

       });
       
      }
    };

module.exports=burger;