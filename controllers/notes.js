const fs = require("fs");
const path = require("path");

const getNotes = (req, res) => {
  const data = fs.readFile(path.join(__dirname, "../db/db.json"));
  res.json(data);
};

const postNote = (req, res) => {
  const data = fs.readFile(path.join(__dirname, "../db/db.json"));

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

  fs.writeFile(path.join(__dirname, "../db/db.json"), data, onFileWrite);
};

module.exports = { getNotes, postNote };
