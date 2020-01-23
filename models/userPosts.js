var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userPostsSchema = {
    /*
    
    */

}

var posts = mongoose.model("userPosts", userPostsSchema);

module.exports = posts;