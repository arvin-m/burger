const express=require("express");
let exphbs = require("express-handlebars");
const app=express();
let routes = require("./controllers/burgers_controller.js");
const PORT =process.env.PORT||8020;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);

app.listen(PORT,(err)=>{
    if (err) throw err;
    console.log(`You Are Connecting To The Port localhost http://localhost:${PORT}/burgers`);
});
