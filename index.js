const express = require("express");

// set up express app
const app = express();

app.get("/", () => {
  console.log("GET request to the homepage");
});

// listen for requests
app.listen(process.env.port || 4000, () => {
  console.log("Example app listening on port 4000!");
});
