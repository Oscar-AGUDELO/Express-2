const express = require("express");
const app = express();
require('dotenv').config();

const port = 3000;

app.get("/", (req, res) => {
  res.send(`I am ${process.env.NAME}, wilder in ${process.env.CITY}, and I love ${process.env.LANGUAGE}`);
  console.log(`I am ${process.env.NAME}, wilder in ${process.env.CITY}, and I love ${process.env.LANGUAGE}`);
});
app.listen(port, (err) => {
  if (err) {
    console.error('Something bad happened');
  } else {
    console.log(`server is listening on ${port}`);
  }
});