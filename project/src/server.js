import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const PORT = process.env.PORT || 3000;

//Get the file path from the URL of current module
const __filename = fileURLToPath(import.meta.url);
// Get the directory name from the file path
const __dirname = dirname(__filename);
//Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

//Serving up the HTML file from th public directory
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => console.log(`Server Started at:${PORT}`));
