// server.js

const express = require('express');
const cors = require('cors');
const authRoutes = require('./authRoutes');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

