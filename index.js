const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/api", (_, res) => {
  res.json({ data: "API is accounted for" });
});

app.listen(port, () => {
  console.log(`\nListening on port ${port}\n`);
});

// console.log("it's alive");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USER);
// console.log(process.env.PORT);
// console.log(process.env.FOOD);
// console.log(process.env.GREET);