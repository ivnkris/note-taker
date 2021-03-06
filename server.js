const express = require("express");

const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

const PORT = process.env.PORT || 8080;

const app = express();

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// initiating server to listen on defined port
app.listen(PORT, () => {
  console.log(`Note Taker is listening on http://localhost:${PORT}`);
});
