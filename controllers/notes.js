const fs = require("fs");
const path = require("path");

const onFileRead = (err, data) => {
  if (err) {
    console.log(err);
  } else {
    return data;
  }
};

const dataBasePath = path.join(__dirname, "../db/db.json");

const getNotes = (req, res) => {
  const fileData = JSON.parse(fs.readFileSync(dataBasePath, onFileRead));
  res.send(fileData);
};

const postNote = (req, res) => {
  const note = req.body;
  const fileData = JSON.parse(fs.readFileSync(dataBasePath, onFileRead));

  fileData.push(note);
  res.send(note);

  const fileDataString = JSON.stringify(fileData);

  const onFileWrite = (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("note successfully saved");
    }
  };

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    fileDataString,
    onFileWrite
  );
};

module.exports = { getNotes, postNote };
