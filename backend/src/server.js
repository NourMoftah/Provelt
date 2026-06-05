import express from "express";
import { ENV } from "./lib/env.js"

const app = express();


console.log(ENV.PORT)

app.get("/", (req, res) => {
  res.status(200).json({ msg: "you did it" });
});

app.listen(ENV.PORT, () => {
  console.log(`server is running on port ${ENV.PORT}`);
});