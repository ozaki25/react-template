const express = require('express');

const app = express();

app.post('/users', (req, res) => res.send({ id: 'ABC123' }));

app.listen(3003, () => {
  console.log('Example app listening on port 3003!');
});
