const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const adRouter = require('./ad/router');

app.use(cors());
app.use(bodyParser.json());
app.use(adRouter);

// USER STORIES

// As a seller I want to be able to add an advertisement to sell something
// CREATE POST ROUTE TO ADD AN ADVERTISEMENT
// As a seller I want to be able to create advertisements without logging or signing in
// CREATE POST ROUTE TO ADD AN ADVERTISEMENT
// As a buyer I want to be able to view a list of advertisements as the first thing I see in the app
// CREATE GET ROUTE LISTING ALL ADVERTISEMENTS
// As a seller I want to add a title, description, picture (url), price, email address and phone number to my advertisement
// CREATING AN ADVERTISEMENT THROUGH THE POST ROUTE SHOULD INCLUDE THE ABOVE
// As a buyer I want to view the title and price in the advertisement list
// SHOW TITLE AND PRICE OF THE ADVERTISEMENT THROUGH THE GET ROUTE
// As a buyer I want to be able to click on an advertisement and be able to see the description, picture (url), price, email address and phone number
// CREATE DETAILS PAGE AND SHOW  AND PRICE OF THE ADVERTISEMENT THROUGH THE GET ROUTE

app.get('/', (_req, res) => {
  res.send('Root path connected!');
});

app.get('*', (_req, res) => {
  res.send("Page not found... this path doesn't exist");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`🚀 Server ready at port :${port}`);
});
