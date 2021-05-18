const fs = require("fs");
const path = require("path");

const getNotes = (req, res) => {
  const onFileRead = (err) => {
    if (err) {
      console.log(err);
    }
  };

  const filePath = path.join(__dirname, "../db/db.json");
  console.log(filePath);
  const fileData = fs.readFile(filePath, onFileRead);
  console.log(fileData);
  const data = [{ title: "Example title", text: "Example text" }];
  res.send(data);
};

const postNote = (req, res) => {
  const data = fs.readFile(path.join(__dirname, "../db/db.json"));

  const note = req.body;

  data.push(note);
  res.send(note);

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
