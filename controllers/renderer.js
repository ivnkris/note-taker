const path = require("path");

// render homepage on page load
const renderIndex = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
};

// render notes page on clicking onto 'Get Started' button
const renderNotes = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
};

module.exports = { renderIndex, renderNotes };
