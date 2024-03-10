const express = require('express');
const app = express();

// only write this commentary to update the repo
app.get('/', (req, res) => {
  res.send('Hello, this is home');
});


app.listen(3012, () => {
  console.log('Server started on port 3012');
});

module.exports = app; // Exporta la aplicación para poder usarla en las pruebas
