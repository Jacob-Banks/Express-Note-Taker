// set dependincies
const express = require("express");
const htmlRoutes = require("./apiRoutes/htmlRoutes");
const apiRoutes = require("./apiRoutes/apiRoutes");

//  server
const app = express();

// create port for heroku
const PORT = process.env.PORT || 3001;

// Data parsinng start middle
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// access to public folder
app.use(express.static("public"));

// use routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// listener
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
