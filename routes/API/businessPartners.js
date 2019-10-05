module.exports = function(app) {
    const express = require("express");
    const db = require("../../models");
    const axios = require("axios");
  
    app.get("/test", (req, res) => {
      res.json({
        msg: "test route works!"
      });
    });
  
    app.get("/api/businessPartners", (req, res) => {
      console.log("here")
      db.BusinessPartner.find({})
        .then(function(dbBusinessPartner) {
          // If any BPs are found, send them to the client
          res.json(dbBusinessPartner);
        })
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
    });

    app.get("/api/businessPartners/:id", (req, res) => {
      db.BusinessPartner.findOne({_id:req.params.id})
        .then(function(dbBusinessPartner) {
          // If any BPs are found, send them to the client
          res.json(dbBusinessPartner);
        })
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
    });
  
    app.post("/api/businessPartners", (req, res) => {
      console.log("yesss");
      const businessPartner = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        emailAddress: req.body.emailAddress,
        streetAddress: req.body.streetAddress,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        relationshipType: req.body.relationshipType,
        notes: req.body.notes
      }
      db.BusinessPartner.create(businessPartner)
        .then(() => {
          res.json({
            success: true
          });
        })
        .catch(err => {
          throw err;
        });
    });

    app.delete("/api/businessPartners/:id", (req, res) => {
      db.BusinessPartner.deleteOne({_id:req.params.id})
        .then(function(dbBusinessPartner) {
          // If any BPs are found, send them to the client
          res.json(dbBusinessPartner);
        })
        .catch(function(err) {
          // If an error occurs, send it back to the client
          res.json(err);
        });
    });
  };
