require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/test', (req, res) => {
  res.status(200).json({ test: 'Server proxy with webpack-dev-server successful' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on ${process.env.PORT || 3000}`);
});