var express = require("express");

var app = express();

app.set("view engine", "jade");

app.get("/", (req, res)=>{
res.render("index", {hi: "Hi easy code"});
});

app.listen(8080);

