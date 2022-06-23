const express = require("express");

// set up express app
const app = express();

app.get("/api", (req, res) => {
  console.log("GET request to the homepage");
  res.send({
    name: "John",
  });
});

// listen for requests
app.listen(process.env.port || 4000, () => {
  console.log("Example app listening on port 4000!");
});
