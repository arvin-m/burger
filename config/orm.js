const connection = require("../config/connection.js");


// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const orm={
    selectAll:(tableName, cb)=>{
      
        let queryString = `SELECT * FROM ${tableName} ;`;
        connection.query(queryString, (err, result) => {
        if (err) throw err;        
        cb(result);
        });
    
    },
    insertOne:(value,cb)=>{
        let queryString=`INSERT INTO burgers (burger_name) VALUES ("${value}"); `;
        connection.query(queryString,(err,result)=>{
        if(err) throw err;
        cb(result);
        });

    },
    updateOne:()=>{



    }


}

 module.exports=orm;