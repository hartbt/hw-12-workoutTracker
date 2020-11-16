
var express = require("express");
var app = express();
var logger = require("morgan")
var mongoose = require("mongoose")

const PORT = process.env.PORT || 3000


app.get("/", function(req, res) {
  res.send("");

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
}):
