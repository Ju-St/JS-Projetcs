//jshint esversion:6

const express = require("express");
//Processing Post requests with Body Parser
const bodyParser = require("body-parser");
//Using the Request module to get data from an API
const request = require("request");

const app = express();

//We pass data that comes from the HTML form
app.use(bodyParser.urlencoded({
//This allows us to post nested object
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
//Gets the values from select tag "name" attribute (crypto and fiat).
  var crypto = req.body.crypto;
  var fiat = req.body.fiat;
  var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
  var finalURL = baseURL + crypto + fiat;

  request(finalURL, function(error, response, body) {
//JSON.parse changes back to object values
    var data = JSON.parse(body);
    var price = data.last;
    var currentDate = data.display_timestamp;

    res.write("<h3>The current date is " + currentDate + "</h3>");
    res.write("<h1>The current price of " + crypto + " is " + price + " " + fiat + "</h1>");
    res.send();
  });

});

//Listen on port 3000
app.listen(3000, function() {
  console.log("Server is running on localhost port 3000.");
});
