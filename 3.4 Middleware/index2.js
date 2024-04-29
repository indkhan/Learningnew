import express from "express";
import morgan from "morgan";

const app = express();
const port = 3001;
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
