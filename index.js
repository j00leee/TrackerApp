const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

var mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, 
{useNewUrlParser: true, useUnifiedTopology: true}
);

/*var nameSchema = new mongoose.Schema({
    userName: String,
    password: String
   });

   var User = mongoose.model("User", nameSchema); */


if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.use(express.static(__dirname));
    app.use(express.static(path.join(__dirname, 'tracker', 'build')));
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, 'tracker', 'build', 'index.html'));
    });
  } 