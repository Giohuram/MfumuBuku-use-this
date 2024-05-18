// require('dotenv').config(); // Charger les variables d'environnement à partir du fichier .env
const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {
  // Extraire le token de l'en-tête Authorization
  const authHeader = req.headers.authorization;

  // Vérifier si l'en-tête Authorization est présent et formaté correctement
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token manquant ou mal formaté. Veuillez vous connecter.' });
  }

  // Extraire le token lui-même
  const token = authHeader.split(' ')[1];

  // Vérifier et décoder le token JWT
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expiré. Veuillez vous reconnecter.' });
      }
      return res.status(401).json({ error: 'Token JWT invalide.' });
    }

    // Si le token est valide, attacher l'ID de l'utilisateur décodé à l'objet de requête (si nécessaire)
    req.userId = decoded.userId; // Par exemple, si votre JWT contient un champ userId
    next();
  });
};

module.exports = jwtAuthMiddleware;
