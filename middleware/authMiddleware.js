// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization || req.headers['x-access-token'];
  if (!authHeader) return res.status(401).json({ error: 'No token provided.' });

  const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Token invalid or expired.' });
    req.user = decoded; // { id, username, email, iat, exp }
    next();
  });
}

module.exports = verifyToken;
