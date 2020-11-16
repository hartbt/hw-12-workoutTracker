var express = require("express");
var app = express();
var logger = require("morgan")
var mongoose = require("mongoose")

const PORT = process.env.PORT || 3000

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/html-routes"))
app.use(require("./routes/api-routes"))



app.get("/", function(req, res) {
  res.send("");
})

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})
