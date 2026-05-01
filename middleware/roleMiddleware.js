const jwt = require("jsonwebtoken");

// 🔐 VERIFY TOKEN
const verifyToken = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded; // contains id + role
    next();

  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};

// 👑 ROLE AUTHORIZATION
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Access denied. Allowed roles: ${roles.join(", ")}`
      });
    }
    next();
  };
};

// ✅ EXPORT BOTH
module.exports = {
  verifyToken,
  authorizeRoles
};