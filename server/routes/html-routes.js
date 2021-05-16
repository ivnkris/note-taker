const express = require("express");

const { renderIndex } = require("../controllers/renderer");

const router = express.Router();

router.get("/", renderIndex);

module.exports = router;
