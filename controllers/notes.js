const fs = require("fs");

const getNotes = (req, res) => {
  const data = fs.readFile("../../db/db.json");
  res.json(data);
};

const postNote = (req, res) => {
  const data = fs.readFile("../db/db.json");

  const note = req.body;

  data.push(note);
  res.json(note);

  const onFileWrite = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("note successfully saved");
    }
  };

  fs.writeFile("../db/db.json", data, onFileWrite);
};

module.exports = { getNotes, postNote };
