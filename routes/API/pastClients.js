module.exports = function(app) {
    const express = require("express");
    const db = require("../../models");
    const axios = require("axios");
  
    app.get("/test", (req, res) => {
      res.json({
        msg: "test route works!"
      });
    });
  
    app.get("/api/pastClients", (req, res) => {
      db.PastClient.find({})
        .then(function(dbPastClient) {
          // If any PCs are found, send them to the client
          res.json(dbPastClient);
        })
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
    });
  
    app.post("/api/pastClients", (req, res) => {
      console.log("yesss");
      const pastClient = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        emailAddress: req.body.emailAddress,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        closingDate: req.body.closingDate,
        loanType: req.body.loanType,
        loanAmount: req.body.loanAmount,
        interestRate: req.body.interestRate,
        notes: req.body.notes
      };
      db.PastClient.create(pastClient)
        .then(() => {
          res.json({
            success: true
          });
        })
        .catch(err => {
          throw err;
        });
    });
  };