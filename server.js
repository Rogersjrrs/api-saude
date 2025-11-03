const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database');
const pacienteRoutes = require('./routes/pacientes');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use('/pacientes', pacienteRoutes);
db.sync()
  .then(() => {
    console.log('Banco de dados sincronizado.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Erro ao sincronizar banco:', err));