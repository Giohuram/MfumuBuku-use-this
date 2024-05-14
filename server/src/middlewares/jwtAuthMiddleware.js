const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {
  // Extract the token from the Authorization header
  const authHeader = req.headers.authorization;

  // Check if the Authorization header is present and formatted correctly
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token manquant ou mal formaté. Veuillez vous connecter.' });
  }

  // Extract the token itself
  const token = authHeader.split(' ')[1];

  // Verify and decode the JWT token
  jwt.verify(token, 'rhksisnsws38jdd87DJS()$#435bjdsk', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token JWT invalide.' });
    }

    // If the token is valid, attach the decoded user ID to the request object
    req.user = decoded;
    next();
  });
};

module.exports = jwtAuthMiddleware;
