const fs = require("fs");

const getNotes = (req, res) => {
  const data = JSON.parse(fs.readFile("../../db/db.json"));
  res.json(data);
};

module.exports = { getNotes };
