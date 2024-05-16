const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const bookRoutes = require('./src/routes/bookRoutes');
const userRoutes = require('./src/routes/userRoutes');
const avatarRoutes = require('./src/routes/AvatarRoutes');
const jwtAuthMiddleware = require('./src/middlewares/jwtAuthMiddleware');
const { addFavorite, getFavorites, removeFavorite } = require('./src/controllers/favoritesController');

const app = express();

// Middleware pour CORS
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, 
}));

// Middleware pour parser les données JSON
app.use(express.json());

// Middleware pour les fichiers statiques
app.use(express.static('uploads'));

// Initialisation de Passport
app.use(passport.initialize());

// Configuration de la stratégie locale pour Passport
passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await prisma.user.findUnique({
        where: { username: username }
      });
      if (!user) {
        return done(null, false, { message: 'Username not found' });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return done(null, false, { message: 'Incorrect password' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

// Montage des routes d'authentification
app.use('/auth', authRoutes);

// Routes des livres avec le middleware d'authentification JWT
app.use('/Book', jwtAuthMiddleware, bookRoutes);

// Routes des utilisateurs avec le middleware d'authentification JWT
app.use('/User', jwtAuthMiddleware, userRoutes);

// Middleware pour les routes liées aux avatars
app.use('/avatars', avatarRoutes);

// Routes pour ajouter et supprimer des livres favoris
app.post('/addFavorite', addFavorite);
app.get('/User/:userId/favorites', getFavorites);
app.delete('/User/:userId/favorites/:bookId', removeFavorite);

// Gestionnaire d'erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Middleware de journalisation
app.use(morgan('dev'));

// Démarrage du serveur
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
