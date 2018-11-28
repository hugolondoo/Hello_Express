var express = require("express");

var app = express();

app.get("/", (req, res)=>{
res.send("hi world");
});

app.listen(8080);

