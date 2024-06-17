const dotenv = require("dotenv");
const express = require("express");
dotenv.config();

const { chats } = require("./data/data");

const app = express();

app.get("/", (req, res) => {
  res.send("Wecome to backend");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});
const PORT = process.env.PORT || 5001;
// console.log(PORT);
app.listen(`${PORT}`, console.log(`Server started on port:${PORT}`));
