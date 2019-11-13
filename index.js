const express = require("express");
const app = express();
const cors = require("cors");
const corsMiddleware = cors();
const bodyParser = require("body-parser");
const bodyParserMiddleware = bodyParser.json();
const adRouter = require("./ad/router");

app.use(corsMiddleware);
app.use(bodyParserMiddleware);
app.use(adRouter);

app.get("/", (request, response) => {
  response.send("FullStack Buy-and-Sell Connected!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Fullstack app listening on port :${port}`);
});
