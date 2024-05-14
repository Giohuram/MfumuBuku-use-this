const passport = require('passport');
const jwt = require('jsonwebtoken');
const authService = require('../authService');

// Fonction d'inscription
const signup = async (req, res, next) => {
  try {
    const { username, password, email, parentName, childAge, schoolLevel, avatar } = req.body;
    const signupStatus = await authService.signup(username, password, email, parentName, childAge, schoolLevel, avatar);

    if (signupStatus) {
      res.status(201).json({ message: 'Inscription réussie.', signupStatus });
    } else {
      res.status(409).json({ message: 'Le username est déjà pris' }); // 409 Conflict pour des conflits de ressource comme un username déjà pris
    }
  } catch (error) {
    next(error); // Utilisez next pour passer l'erreur au middleware de gestion des erreurs
  }
};

// Fonction de connexion
const login = (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return next(err); // Utilisez next pour passer l'erreur au middleware de gestion des erreurs
    }
    if (!user) {
      return res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        return next(err); // Utilisez next pour passer l'erreur au middleware de gestion des erreurs
      }
      const token = jwt.sign({ id: user.id }, 'rhksisnsws38jdd87DJS()$#435bjdsk');
      res.cookie('token', token, {
        httpOnly: true,
        secure: true, // Assurez-vous que HTTPS est activé dans votre environnement de production
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000, // Durée de vie de 7 jours en millisecondes
      });
      return res.json({ token });
    });
  })(req, res, next);
};

const getUserBooks = async (req, res, next) => {
  try {
    const userId = req.user.id; // Récupérez l'ID de l'utilisateur à partir du jeton JWT ou de la session
    const userBooks = await authService.getUserBooks(userId);
    res.status(200).json({ userBooks });
  } catch (error) {
    next(error); // Utilisez next pour passer l'erreur au middleware de gestion des erreurs
  }
};

module.exports = { signup, login, getUserBooks };
