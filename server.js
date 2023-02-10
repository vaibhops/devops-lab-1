'use strict';

const express = require('express');

// Constants
const PORT = 8082;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('this lab is done now thanks for ur support');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
