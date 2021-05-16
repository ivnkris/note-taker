const express = require("express");

const { getNotes } = require("../controllers/notes");

const router = express.Router();

router.get("/api/notes", getNotes);

module.exports = router;
