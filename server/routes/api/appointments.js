const router = require("express").Router();
const apptsController = require("../../controllers/apptsController");

router
.route("/api/appts/:id")
.get(apptsController.getAppts)
.post(apptsController.addAppt);

module.exports = router;