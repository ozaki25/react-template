const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/users', (req, res) => {
  if (Math.random() > 0.6) {
    console.log('failed!');
    return res.status(500).send({ error: 'Something failed!' });
  }
  console.log('successed!');
  return setTimeout(() => res.send({ id: 'ABC123' }), 3000);
});

app.listen(3003, () => {
  console.log('Example app listening on port 3003!');
});
