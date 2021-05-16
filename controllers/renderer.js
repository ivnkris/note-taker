const path = require("path");

const renderIndex = (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
};

const renderNotes = (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
};

module.exports = { renderIndex, renderNotes };
