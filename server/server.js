import express from "express";


const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  console.log("hello world");
  res.send("Welcome");
});

app.listen(PORT, () => {
  console.log(`The servier listening on PORT ${PORT}...`);
});
