import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send(" hi there");
});

app.listen(PORT, () => console.log(`Server Started at:${PORT}`));
