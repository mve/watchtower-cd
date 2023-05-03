import dotenv from "dotenv";
import express from "express";

dotenv.config();
const { PORT } = process.env;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World Updated!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
