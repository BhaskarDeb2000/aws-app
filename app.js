const express = require("express");
const app = express();

// Define a route to handle GET requests
app.get("/", (req, res) => {
  res.send(
    "Hello, Elastic Beanstalk! The assignment has been submitted by Bhaskar Deb, Sabina Akter, and Saimun Islam"
  );
});

// Set the app to listen on port 8080
app.listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
