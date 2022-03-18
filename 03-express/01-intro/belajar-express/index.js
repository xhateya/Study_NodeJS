// import from 'express'
const express = require("express");

// instantiate express
const app = express();

//routing index / menggunakan GET

app.get("/", (req, res) => {
  res.send("Pengen Pulang!");
});
//tentukan port dari server
app.listen(3000, () => {
  console.log(" server berjalan di port 3000");
});
