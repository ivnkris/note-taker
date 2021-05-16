const express = require("express");

const { getNotes, postNote } = require("../controllers/notes");

const router = express.Router();

router.get("/api/notes", getNotes);
router.post("api/notes", postNote);

module.exports = router;
