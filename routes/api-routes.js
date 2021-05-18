const { Router } = require("express");

const { getNotes, postNote } = require("../controllers/notes");

const router = Router();

router.get("/notes", getNotes);
router.post("/notes", postNote);

module.exports = router;
