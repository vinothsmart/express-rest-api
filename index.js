const express = require("express");

// set up express app
const app = express();

app.get("/", (req, res) => {
  console.log("GET request to the homepage");
  res.end();
});

// listen for requests
app.listen(process.env.port || 4000, () => {
  console.log("Example app listening on port 4000!");
});
