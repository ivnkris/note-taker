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

  fs.writeFileSync(dataBasePath, fileDataString, onFileWrite);
};

const deleteNote = (req, res) => {
  noteId = req.params.id;

  let fileData = JSON.parse(fs.readFileSync(dataBasePath, onFileRead));

  const onDelete = (note, index) => {
    if (note.id === noteId) {
      fileData.splice(index, 1);
    }
  };

  fileData.forEach(onDelete);
  const deletedNoteDataString = JSON.stringify(fileData);

  fs.writeFileSync(dataBasePath, deletedNoteDataString, onFileWrite);
  res.send(fileData);
};

module.exports = { getNotes, postNote, deleteNote };
