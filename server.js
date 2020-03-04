const express=require("express");
let exphbs = require("express-handlebars");
const app=express();
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT =process.env.PORT||8020;

app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");















app.listen(PORT,(err)=>{
    if (err) throw err;

    console.log(`You Are Connecting To The Port localhost http://localhost:${PORT}/`);

});
