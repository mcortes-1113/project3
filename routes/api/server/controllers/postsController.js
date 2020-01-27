const db = require("../models");
const axios = require("axios");

module.exports = {

  getMemberPosts: function(req, res) {
    console.log("get member posts")
    db.posts
    //   .findByID(req.params.accountID)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addPost: function(req, res) {
    console.log("addPost")
    db.posts.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getPosts: function(req, res) {
    console.log("get all posts")
    db.appointments
    //   .findByID(req.params.accountID)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};