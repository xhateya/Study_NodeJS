// require dotenv
require("dotenv").config();

//import express
const express = require("express");

//import body-parser
const bodyParser = require("body-parser");

//import module headers
const headers = require("./middlewares/headers");

//import module body
const body = require("./middlewares/body");

//instantiate express
const app = express();


//HEREEE middleware body-parser json
app.use(bodyParser.json(),(req,res,next) => {
  console.log("query: ", req.query);


});
// //middleware pertama yakni body-parser
// //middleware kedua menampilkan headers dari request
// app.use(bodyParser.json(), headers);

// //middleware hanya berlaku pada method post  index/
// //tampilkan isi dari request body menggunakan middleware body
// //tampilkan data request body ke client
// app.post(
//   "/",
//   bodyParser.urlencoded({ extended: true }),
//   body,
//   (req, res, next) => {
//     //kirim data request body ke client menggunakan res.send
//     res.send(req.body);
//   }
// );

// // middleware untuk selain method POST di index /
// app.use("/", (req, res, next) => {
//   req.send(req.headers);
// });

//port
app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di port ${process.env.PORT}`);
});
