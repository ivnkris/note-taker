const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const onFileRead = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    return data;
  }
};

const onFileWrite = (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("note successfully saved");
  }
};

const dataBasePath = path.join(__dirname, "../db/db.json");
const fileData = JSON.parse(fs.readFileSync(dataBasePath, onFileRead));

const getNotes = (req, res) => {
  res.send(fileData);
};

const postNote = (req, res) => {
  const id = uuidv4();
  const note = req.body;
  note.id = id;

  fileData.push(note);
  res.send(note);

  const fileDataString = JSON.stringify(fileData);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    fileDataString,
    onFileWrite
  );
};

module.exports = { getNotes, postNote };
