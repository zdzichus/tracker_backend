// middlewares/auth.js

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      res.status(401).json({ message: "Token Missing!" });
    }
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, "alamakota123");
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed!" });
  }
};