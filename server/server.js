const express = require('express');
const passport = require('passport');
const morgan = require('morgan'); 
const bcrypt = require('bcrypt'); // Import bcrypt module
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors');
const authRoutes = require('./src/routes/authRoutes');
const bookRoutes = require('./src/routes/bookRoutes');
const userRoutes = require('./src/routes/userRoutes');
const jwtAuthMiddleware = require('./src/middlewares/jwtAuthMiddleware');
const { PrismaClient } = require('@prisma/client');
const session = require('express-session');
const verificationRoutes = require('./src/routes/verificationRoutes');
const subscriptionRoutes = require('./src/routes/subscriptionRoutes');
const readingHistoryRoutes = require('./src/routes/readingHistoryRoutes');
const parentalControlRoutes = require('./src/routes/parentalControlRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');

const app = express();

// Import Prisma and instantiate it
const prisma = new PrismaClient();

const users = [];


// Middleware pour CORS
app.use(cors({
  origin: 'https://mfumubuku-kids-frontend.onrender.com',
  credentials: true, 
}));

// Utilisation du middleware de session
app.use(session({
  secret: '35jfbejfb489njedbjb#bjfb%@{}?.<>\|', // Clé secrète pour signer la session
  resave: false,
  saveUninitialized: false,
}));

// Route pour définir une valeur dans la session
app.get('/setSessionValue', (req, res) => {
  req.session.user = { username: 'utilisateur1' };
  res.send('Valeur définie dans la session');
});

// Route pour récupérer une valeur de la session
app.get('/getSessionValue', (req, res) => {
  const user = req.session.user;
  res.send(user ? `Utilisateur connecté: ${user.username}` : 'Aucun utilisateur connecté');
});

// Middleware pour parser les données JSON
app.use(express.json());

app.use('/verification', verificationRoutes);


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
app.use('/user', jwtAuthMiddleware, userRoutes);

// Gestionnaire d'erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.use('/subscriptions', subscriptionRoutes);
app.use('/reading-histories', readingHistoryRoutes);
app.use('/parental-controls', parentalControlRoutes);

// Route de paiement 
app.use('/api', paymentRoutes);

// Middleware de journalisation
app.use(morgan('dev'));

// Démarrage du serveur
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
