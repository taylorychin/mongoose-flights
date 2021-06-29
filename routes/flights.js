var express = require('express');
var router = express.Router();
const flightsController = require("../controllers/flights");

/* GET users listing. */
router.get("/", flightsController.index);

//GET /new
router.get("/new", flightsController.new);
router.get("/:id", flightsController.show);

router.post("/", flightsController.create);


module.exports = router;

