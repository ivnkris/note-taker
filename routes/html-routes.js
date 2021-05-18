const { Router } = require("express");

const { renderIndex, renderNotes } = require("../controllers/renderer");

const router = Router();

router.get("/", renderIndex);
router.get("/notes", renderNotes);

module.exports = router;
