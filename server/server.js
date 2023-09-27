import express from 'express'
import companiesRoutes from './routes/companiesRoutes.js'

import "dotenv/config.js"

const app = express()


app.use('/companies', companiesRoutes);
// app.get('/companies', (req, res) => {
//     res.json(companiesData);
// });

// const cors = require('cors');
// app.use(cors());
app.use(express.static('public'));


app.use('/public', express.static('./public'))

app.use('/scripts', express.static('./public/scripts'))

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Listicle App</h1>')
  })


const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
