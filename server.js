const express = require("express"); //load express module
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
// const axios = require("axios");
const port = 5000;
const { decode, encode } = require("@googlemaps/polyline-codec");

app.use(bodyParser.json());
app.use(cors());

const gEncode = (data) => {
  return encode(data, 5);
};

const gDecode = (data) => {
  return decode(data, 5);
};

// const encoded = "_p~iF~ps|U_ulLnnqC_mqNvxq`@";
// console.log(decode(encoded, 5));
// // [
// //   [38.5, -120.2],
// //   [40.7, -120.95],
// //   [43.252, -126.453],
// // ]

// const path = [
//   [38.5, -120.2],
//   [40.7, -120.95],
//   [43.252, -126.453],
// ];
// console.log(encode(path, 5));
// function to get the data from the API
// let getFacts = async () => {
//   let response = await axios(`https://catfact.ninja/fact`);
//   return response;
// };

app.post("/encode", (req, res) => {
  // console.log("Got body:", req.body);
  // res.sendStatus(200);
  res.send(gEncode({ code: req.body.data }));
  // res.send(true);
});

app.post("/decode", (req, res) => {
  res.send(gDecode({ code: req.body.data }));
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// // Make a request for a user with a given ID
// axios
//   .get("/user?ID=12345")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// // Optionally the request above could also be done as
// axios
//   .get("/user", {
//     params: {
//       ID: 12345,
//     },
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

// axios
//   .post("/user", {
//     firstName: "Fred",
//     lastName: "Flintstone",
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
