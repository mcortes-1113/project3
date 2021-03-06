const db = require("../models");
const axios = require("axios");

module.exports = {

  getAppts: function(req, res) {
    console.log("getAppts")
    db.appointments // use "appointments" model
    //   .findByID(req.params.accountID)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addAppt: function(req, res) {
    console.log("addAppt")
    db.appointments
      .create(req.body) // body requires:
                          // fullName, email, phoneNumber, apptTime, contactTime, comments 
                          // this should come from add appointment form
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
