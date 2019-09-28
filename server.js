const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const axios = require("axios");
const path = require("path");
const db = require("./models/BusinessPartner");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect("mongodb://heroku_gwd1cnzd:r17g5gr7bsbtsral6plto9i2d5@ds131119.mlab.com:31119/heroku_gwd1cnzd", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

require("./routes/api/businessPartners")(app);
require("./routes/api/pastClients")(app);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});