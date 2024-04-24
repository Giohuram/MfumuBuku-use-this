// server.js

const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');
const authRoutes = require('./authRoutes'); // Importez vos routes d'authentification

const app = express();

// Middleware CORS
app.use(cors());

// Middleware pour le parsing des données JSON
app.use(express.json());

// Initialiser Passport
app.use(passport.initialize());

// Configuration de la stratégie locale
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: { username: username }
      });
      if (!user) {
        return done(null, false);
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return done(null, false);
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

// Utiliser les routes d'authentification
app.use('/auth', authRoutes); // Utilisez le préfixe '/auth' pour toutes les routes d'authentification

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
