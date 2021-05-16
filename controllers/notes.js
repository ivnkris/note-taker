const fs = require("fs");

const getNotes = (req, res) => {
  const data = JSON.parse(fs.readFile("../../db/db.json"));
  res.json(data);
};

const postNote = (req, res) => {
  const data = JSON.parse(fs.readFile("../db/db.json"));

  const note = req.body;

  data.push(note);
  res.json(note);

  const errorHandling = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("note successfully saved");
    }
  };

  fs.writeFile("../db/db.json", data, errorHandling);
};

module.exports = { getNotes, postNote };
