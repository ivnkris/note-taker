const { Router } = require("express");

const { getNotes, postNote, deleteNote } = require("../controllers/notes");

const router = Router();

router.get("/notes", getNotes);
router.post("/notes", postNote);
router.delete("/notes/:id", deleteNote);

module.exports = router;
