const express = require("express");

const app = express();
const PORT = 3000;
let data = {
  name: "harkirat",
};
console.log("server is up");
app.get("/", (req, res) => {
  console.log("hi there");
  res.send("<h1>This is a WebPage</h1>");
});

app.get("/dashboard", (req, res) => {
  res.send("<h2>this ia dashboard</h2>");
});
app.get("/api/data", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => console.log(`Server is Started At: ${PORT}`));



// C=> Create => POST
// R=> Read => GET
// U=> Update => PUT
// D=> Delete => DELETE