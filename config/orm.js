const connection = require("../config/connection.js");

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
    updateOne:(tableName,newValu,itemId,cb)=>{
        let queryString=`Update ${tableName} SET devoured =(${newValu}) WHERE id=${itemId};`;
        connection.query(queryString,(err,result)=>{
        if(err) throw err;
        cb(result);

        });

    }


};

 module.exports=orm;