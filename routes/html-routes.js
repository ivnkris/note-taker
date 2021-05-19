const { Router } = require("express");

const { renderIndex, renderNotes } = require("../controllers/renderer");

const router = Router();

// route to render home page
router.get("/", renderIndex);

// route to render notes page
router.get("/notes", renderNotes);

module.exports = router;
