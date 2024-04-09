const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => res.json({ message: "Express on Vercel" }));

app.listen(5000, () => console.log("Server ready on port 3000."));

module.exports = app;
