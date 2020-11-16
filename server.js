var express = require("express");
var logger = require("morgan")
var mongoose = require("mongoose")

const PORT = process.env.PORT || 3000

var app = express();

app.use(logger("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fitnessTracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(require("./routes/html-routes"))
app.use(require("./routes/api-routes"))




// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})
