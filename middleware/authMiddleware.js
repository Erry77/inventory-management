const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
    let token;

    // 1. Check if token exists in headers
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")) {
      // Extract token
      token = req.headers.authorization.split(" ")[1];
    }

    // 2. If no token
    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
    // 3. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Get user from DB (exclude password)
    req.user = decoded; // contains id + role

    // 5. Continue to next middleware/controller
    next();

  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token failed" });
  }
};

// module.exports = protect;