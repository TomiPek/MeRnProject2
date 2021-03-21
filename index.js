const PORT = process.env.PORT || 5000; // Portin sijainti

let express = require("express"); // Express käyttöön
let app = express();
app.use(express.static("./public/")); // apille tiedostojen sijainti. Esim tyylitiedosto.

app.set("view engine", "ejs"); // ejs templaten käyttöönotto

tekija = "Made by: Tomi Pekurinen"; // footteria varten tekijä muuttuja

app.get("/", (req, res) => {
  // funktio pääsivua varten
  res.render("pages/index", {
    // Ohjetekstin muuttuja, sijainti on partials/pubit.ejs
    hello:
      "Welcome! Here you can find information about breweries around United States",
  });
});

app.get("/cities", (req, res) => {
  // kaupungit välilehti
  res.render("pages/towns");
});
app.get("/upcoming", (req, res) => {
  // tulevat
  res.render("pages/coming");
});
app.listen(PORT, () => {
  // kuunnellaan haluttua porttia
  console.log("Kuunnellaan porttia 5000");
});
