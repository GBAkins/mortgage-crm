module.exports = function(app) {
    const express = require("express");
    const db = require("../../models");
    const axios = require("axios");
  
    app.get("/test", (req, res) => {
      res.json({
        msg: "businessPartners route works!"
      });
    });
  
    app.get("/api/businessPartners", (req, res) => {
      db.BusinessPartner.find({})
        .then(function(dbBusinessPartner) {
          // If any Notes are found, send them to the client
          res.json(dbBusinessPartner);
        })
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
    });
  
    app.post("/api/businessPartners", (req, res) => {
      console.log("yesss");
      const businessPartner ={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        emailAddress: req.body.emailAddress,
        businessAddress: req.body.businessAddress,
        relationshipType: req.body.relationshipType,
        notes: req.body.notes
      }
      db.businessPartner.create(businessPartner)
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
