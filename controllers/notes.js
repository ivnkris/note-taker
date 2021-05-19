const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// handle callback function on file read from db.json
const onFileRead = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    return data;
  }
};

// handle callback function on file write into db.json
const onFileWrite = (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("note successfully saved");
  }
};

// path to database
const dataBasePath = path.join(__dirname, "../db/db.json");

// function to serve notes from the database
const getNotes = (req, res) => {
  const fileData = JSON.parse(fs.readFileSync(dataBasePath, onFileRead));
  res.send(fileData);
};

// function to add note to the database
const postNote = (req, res) => {
  const fileData = JSON.parse(fs.readFileSync(dataBasePath, onFileRead));
  const id = uuidv4();
  const note = req.body;
  note.id = id;

  fileData.push(note);
  res.send(note);

  const fileDataString = JSON.stringify(fileData);

  fs.writeFileSync(dataBasePath, fileDataString, onFileWrite);
};

// function to delete note from the database
const deleteNote = (req, res) => {
  noteId = req.params.id;

  let noteDeleteData = JSON.parse(fs.readFileSync(dataBasePath, onFileRead));

  const onDelete = (note, index) => {
    if (note.id === noteId) {
      noteDeleteData.splice(index, 1);
    }
  };

  noteDeleteData.forEach(onDelete);
  const deletedNoteDataString = JSON.stringify(noteDeleteData);

  fs.writeFileSync(dataBasePath, deletedNoteDataString, onFileWrite);
  res.send(noteDeleteData);
};

module.exports = { getNotes, postNote, deleteNote };
