const router = require("express").Router();
const postsController = require("../../controllers/postsController");

router
  .route("/api/posts/:id")
  .get(postsController.getMemberPosts)
  .post(postsController.addPost);

  router
  .route("/api/posts")
  .get(postsController.getPosts)

module.exports = router;
