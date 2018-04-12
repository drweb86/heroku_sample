
const express = require('express');
const app = express();

app.get('/', function (req, res) {

    res.json({ a: 1 });
});

const ApplicationPort = process.env.PORT || 3000;

app.listen(ApplicationPort, function () {
  console.log(`Example app listening on port ${ApplicationPort}!`);
});

