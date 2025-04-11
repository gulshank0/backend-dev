const express = require("express");

const app = express();
const PORT = 3000;
let data = ["kunal"];

//middleware invokes the
app.use(express.json());
console.log("server is up");
app.get("/", (req, res) => {
  console.log("hi there");
  res.send("<h1>This is a WebPage</h1>");
});

app.get("/dashboard", (req, res) => {
  res.send("<h2>this ia dashboard</h2>");
});
app.get("/api/data", (req, res) => {
  res.send(`<body style="background:pink ;color:blue">
<h1>DATA : </h1>
<p> ${JSON.stringify(data)}</p>

</body>`);
});

app.post("/api/data", (req, res) => {
  const newEntry = req.body;
  console.log(newEntry);
  data.push(newEntry.email);
  data.push(newEntry.ema);
  res.sendStatus(201);
});

app.delete("/api/data", (req, res) => {
  data.pop();
  console.log("We deleted the element off the Array");
  send.sendStatus(203);
});

app.listen(PORT, () => console.log(`Server is Started At: ${PORT}`));

// C=> Create => POST
// R=> Read => GET
// U=> Update => PUT
// D=> Delete => DELETE

