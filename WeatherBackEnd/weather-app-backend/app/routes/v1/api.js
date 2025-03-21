const express = require("express");
const router = express.Router();
const weatherController = require("../../controller/weatherController")


router.get("/weather", weatherController.index);

module.exports = router;