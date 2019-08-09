const express   = require('express');
const app       = express();
const path      = require('path');
const countries = require("./countries.json");
const cors      = require('cors');
const port      = 3001;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/countries', (req, res, next) => {
    res.json(countries);
});

app.listen(port, (err) => {
  if (err) {
    return console.log('ERROOORRR', err)
  }

  console.log(`server is listening on port ${port}`)
})