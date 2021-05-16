const path = require("path");

const renderIndex = (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
};

module.exports = { renderIndex };
