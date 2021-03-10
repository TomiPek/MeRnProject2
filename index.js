const PORT = process.env.PORT || 5000;

let express = require("express");
let app = express();
app.use(express.static("./public/")); // appille tiedostojen sijainti

app.set("view engine", "ejs");

app.locals.pretty = true;

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/cities", (req, res) => {
  res.render("pages/towns");
});
app.get("/upcoming", (req, res) => {
  res.render("pages/coming");
});
app.listen(PORT, () => {
  console.log("Kuunnellaan porttia 5000");
});
