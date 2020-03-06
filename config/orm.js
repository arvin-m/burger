const connection = require("../config/connection.js");


// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const orm={
    selectAll:(tableInput, cb)=>{
      
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
        if (err) {
            throw err;
        }
        cb(result);
        });
          


    },
    insertOne:()=>{



    },
    updateOne:()=>{



    }


}

 module.exports=orm;