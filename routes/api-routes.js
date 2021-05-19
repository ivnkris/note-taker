const { Router } = require("express");

const { getNotes, postNote, deleteNote } = require("../controllers/notes");

const router = Router();

// route to get notes from database
router.get("/notes", getNotes);

// route to post new note into database
router.post("/notes", postNote);

// route to delete note from database
router.delete("/notes/:id", deleteNote);

module.exports = router;
