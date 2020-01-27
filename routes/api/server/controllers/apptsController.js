const db = require("../models");
const axios = require("axios");

module.exports = {

  getAppts: function(req, res) {
    console.log("findAppts")
    db.appointments
    //   .findByID(req.params.accountID)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addAppt: function(req, res) {
    console.log("addAppt")
    db.posts.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
