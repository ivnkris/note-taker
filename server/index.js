const express = require("express");

const PORT = 8080;

const app = express();

app.listen(PORT, () => {
  console.log(`Note Taker is listening on http://localhost:${PORT}`);
});
