const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let sensores = [
  { id: 1, barrio: "Porfía", nivel: 65 },
  { id: 2, barrio: "La Esperanza", nivel: 80 },
];

app.get('/sensores', (req, res) => {
  res.json(sensores);
});

app.listen(3000, () => {
  console.log('✅ Servidor backend corriendo en http://localhost:3000');
});
