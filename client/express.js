const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('dist'));

const data = require('./src/data');

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Listicle App</h1>')
})

app.get('/api/tips/:id', (req, res) => {
  const tip = data.find(d => d.id == req.params.id);
  if (tip) {
    res.json(tip);
  } else {
    res.status(404).send('Not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
