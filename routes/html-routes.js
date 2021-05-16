const express = require("express");

const { renderIndex, renderNotes } = require("../controllers/renderer");

const router = express.Router();

router.get("/", renderIndex);
router.get("/notes", renderNotes);

module.exports = router;
